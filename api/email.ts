import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Redis } from '@upstash/redis';

const EMAIL_LIST_KEY = 'zero-nyang:email-list';

// Upstash Redis 클라이언트 초기화
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN!,
});

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  // CORS 설정
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    if (req.method === 'POST') {
      // 이메일 저장
      const { email } = req.body;

      if (!email || typeof email !== 'string') {
        return res.status(400).json({ error: '이메일 주소가 필요합니다.' });
      }

      // 이메일 형식 검증
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ error: '유효한 이메일 주소를 입력해주세요.' });
      }

      // 중복 확인 및 저장 (Set을 사용하여 중복 방지)
      const isMember = await redis.sismember(EMAIL_LIST_KEY, email.toLowerCase());
      
      if (isMember) {
        return res.status(409).json({ 
          error: '이미 등록된 이메일 주소입니다.',
          success: false 
        });
      }

      // 이메일 저장 (Set에 추가)
      await redis.sadd(EMAIL_LIST_KEY, email.toLowerCase());
      
      // 타임스탬프도 함께 저장 (선택사항)
      const timestamp = new Date().toISOString();
      await redis.hset(`zero-nyang:email:${email.toLowerCase()}`, {
        email: email.toLowerCase(),
        timestamp,
      });

      return res.status(200).json({ 
        success: true,
        message: '이메일이 성공적으로 등록되었습니다.',
        email: email.toLowerCase()
      });
    }

    if (req.method === 'GET') {
      // 저장된 이메일 목록 조회
      // 쿼리 파라미터로 인증 키 확인 (간단한 보안)
      const authKey = req.query.auth;
      const validAuthKey = process.env.EMAIL_LIST_AUTH_KEY || 'zero-nyang-secret-key';

      if (authKey !== validAuthKey) {
        return res.status(401).json({ 
          error: '인증이 필요합니다.',
          hint: '?auth=your-secret-key 쿼리 파라미터를 추가하세요.'
        });
      }

      // 모든 이메일 가져오기
      const emails = await redis.smembers(EMAIL_LIST_KEY);
      const emailCount = emails.length;

      // 각 이메일의 상세 정보 가져오기
      const emailDetails = await Promise.all(
        emails.map(async (email: string) => {
          const details = await redis.hgetall(`zero-nyang:email:${email}`);
          return {
            email,
            timestamp: details?.timestamp || null,
            ...details
          };
        })
      );

      // 타임스탬프 기준으로 정렬 (최신순)
      emailDetails.sort((a, b) => {
        if (!a.timestamp) return 1;
        if (!b.timestamp) return -1;
        return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
      });

      return res.status(200).json({
        count: emailCount,
        emails: emailDetails,
      });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}

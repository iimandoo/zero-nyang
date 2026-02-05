import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Redis } from '@upstash/redis';

const LIKE_COUNT_KEY = 'zero-nyang:like-count';

// Upstash Redis 클라이언트 초기화
// 환경 변수 이름은 Upstash 버전에 따라 다를 수 있습니다
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
    if (req.method === 'GET') {
      // 좋아요 개수 조회
      const count = await redis.get<number>(LIKE_COUNT_KEY);
      const likeCount = count || 4285; // 기본값

      return res.status(200).json({ count: likeCount });
    }

    if (req.method === 'POST') {
      // 좋아요 증가 (원자적 연산)
      const count = await redis.incr(LIKE_COUNT_KEY);
      
      // 초기값이 없었던 경우 기본값으로 설정
      if (count === 1) {
        await redis.set(LIKE_COUNT_KEY, 4286);
        return res.status(200).json({ count: 4286, success: true });
      }

      return res.status(200).json({ count, success: true });
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

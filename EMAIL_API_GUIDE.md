# 이메일 저장 API 가이드

## 구현된 기능

✅ 이메일 저장 API (`POST /api/email`)
✅ 저장된 이메일 목록 조회 API (`GET /api/email`)
✅ 중복 이메일 방지
✅ 이메일 형식 검증
✅ 타임스탬프 저장

## API 엔드포인트

### POST /api/email
이메일 주소를 저장합니다.

**요청:**
```json
{
  "email": "user@example.com"
}
```

**성공 응답 (200):**
```json
{
  "success": true,
  "message": "이메일이 성공적으로 등록되었습니다.",
  "email": "user@example.com"
}
```

**중복 이메일 응답 (409):**
```json
{
  "error": "이미 등록된 이메일 주소입니다.",
  "success": false
}
```

**잘못된 형식 응답 (400):**
```json
{
  "error": "유효한 이메일 주소를 입력해주세요."
}
```

### GET /api/email
저장된 이메일 목록을 조회합니다.

**요청:**
```
GET /api/email?auth=your-secret-key
```

**응답:**
```json
{
  "count": 2,
  "emails": [
    {
      "email": "user1@example.com",
      "timestamp": "2025-02-05T10:30:00.000Z"
    },
    {
      "email": "user2@example.com",
      "timestamp": "2025-02-05T09:15:00.000Z"
    }
  ]
}
```

## 저장된 이메일 확인 방법

### 방법 1: API 직접 호출 (브라우저)

1. **인증 키 설정** (선택사항)
   - Vercel Dashboard → 프로젝트 → Settings → Environment Variables
   - `EMAIL_LIST_AUTH_KEY` 환경 변수 추가 (기본값: `zero-nyang-secret-key`)
   - 보안을 위해 강력한 키로 변경하는 것을 권장합니다

2. **브라우저에서 확인**
   ```
   https://zero-nyang.vercel.app/api/email?auth=your-secret-key
   ```

### 방법 2: curl 명령어 사용

```bash
# 기본 인증 키 사용
curl "https://zero-nyang.vercel.app/api/email?auth=zero-nyang-secret-key"

# 커스텀 인증 키 사용
curl "https://zero-nyang.vercel.app/api/email?auth=your-custom-key"
```

### 방법 3: Upstash Console에서 직접 확인

1. [Upstash Console](https://console.upstash.com/) 접속
2. `upstash-kv-cyan-book` 데이터베이스 선택
3. **Data Browser** 탭에서 확인:
   - `zero-nyang:email-list` - Set 타입으로 저장된 모든 이메일
   - `zero-nyang:email:{email}` - 각 이메일의 상세 정보 (Hash 타입)

### 방법 4: Vercel Functions 로그 확인

1. Vercel Dashboard → 프로젝트 → **Functions** 탭
2. `api/email` 함수 클릭
3. **Logs** 탭에서 API 호출 로그 확인

## 데이터 저장 구조

Upstash KV에 다음과 같이 저장됩니다:

1. **Set 타입**: `zero-nyang:email-list`
   - 모든 이메일 주소를 Set으로 저장 (중복 방지)

2. **Hash 타입**: `zero-nyang:email:{email}`
   - 각 이메일의 상세 정보:
     - `email`: 이메일 주소
     - `timestamp`: 등록 시간 (ISO 8601 형식)

## 보안 설정

### 인증 키 변경하기

1. Vercel Dashboard → 프로젝트 → Settings → Environment Variables
2. `EMAIL_LIST_AUTH_KEY` 환경 변수 추가/수정
3. 강력한 랜덤 키 생성 예시:
   ```bash
   # Node.js에서
   require('crypto').randomBytes(32).toString('hex')
   
   # 또는 온라인 도구 사용
   ```

4. 재배포 후 새로운 키로 접근:
   ```
   https://zero-nyang.vercel.app/api/email?auth=your-new-secret-key
   ```

## 테스트 방법

### 로컬 테스트

1. 개발 서버 실행:
   ```bash
   npm run dev
   ```

2. 이메일 저장 테스트:
   ```bash
   curl -X POST http://localhost:5173/api/email \
     -H "Content-Type: application/json" \
     -d '{"email":"test@example.com"}'
   ```

3. 이메일 목록 조회:
   ```bash
   curl "http://localhost:5173/api/email?auth=zero-nyang-secret-key"
   ```

### 프로덕션 테스트

배포 후:
1. 웹사이트에서 이메일 입력 폼 테스트
2. API 엔드포인트 직접 호출하여 확인
3. Upstash Console에서 데이터 확인

## 문제 해결

### 이메일이 저장되지 않는 경우

1. 환경 변수 확인:
   - `UPSTASH_REDIS_REST_URL` 또는 `KV_REST_API_URL`
   - `UPSTASH_REDIS_REST_TOKEN` 또는 `KV_REST_API_TOKEN`

2. Vercel Functions 로그 확인:
   - Functions → `api/email` → Logs

3. Upstash KV 연결 확인:
   - Storage 탭에서 데이터베이스가 연결되어 있는지 확인

### 인증 오류가 발생하는 경우

- `?auth=` 쿼리 파라미터를 추가했는지 확인
- 환경 변수 `EMAIL_LIST_AUTH_KEY`가 설정되어 있다면 해당 값을 사용
- 기본값은 `zero-nyang-secret-key`입니다

# Vercel 배포 및 KV 설정 가이드

## 구현된 기능

✅ 좋아요 개수 조회 API (`GET /api/likes`)
✅ 좋아요 증가 API (`POST /api/likes`)
✅ 프론트엔드에서 API 호출 통합

## Upstash Redis 설정 방법 (Marketplace)

> **참고:** Vercel KV는 중단되었습니다. 이제 Marketplace를 통해 **Upstash for Redis**를 사용합니다.

### 1. Upstash for Redis 설치 (Marketplace)

1. [Vercel Dashboard](https://vercel.com/dashboard)에 로그인
2. 프로젝트 선택
3. **Storage** 탭으로 이동
4. **Create Database** 클릭 또는 **Marketplace** 버튼 클릭
5. Marketplace에서 **"Upstash"** 또는 **"Upstash for Redis"** 검색
6. **Upstash for Redis** 선택 (빨간색 아이콘)
7. 데이터베이스 이름 입력 (예: `zero-nyang-redis`)
8. **Create** 또는 **Install** 클릭

> **중요:** Marketplace에서 "Upstash KV"가 아니라 **"Upstash for Redis"**를 찾으세요!

### 2. 프로젝트 연결

1. Upstash Redis 대시보드에서 프로젝트 이름 옆의 **Link** 버튼 클릭
2. Vercel이 자동으로 환경 변수를 추가합니다

### 3. 환경 변수 확인

다음 환경 변수들이 자동으로 설정됩니다:
- `UPSTASH_REDIS_REST_URL` 또는 `KV_REST_API_URL` - Upstash REST API URL
- `UPSTASH_REDIS_REST_TOKEN` 또는 `KV_REST_API_TOKEN` - Upstash REST API 토큰

> **참고:** 환경 변수 이름은 Upstash 버전에 따라 다를 수 있습니다. 
> 코드에서는 `KV_REST_API_URL`과 `KV_REST_API_TOKEN`을 사용하도록 설정되어 있습니다.

### 3. 배포

코드를 커밋하고 푸시하면 Vercel이 자동으로 배포합니다:

```bash
git add .
git commit -m "Add like counter backend with Vercel KV"
git push
```

### 4. 로컬 개발 (선택사항)

로컬에서 테스트하려면:

1. Vercel CLI 설치:
```bash
npm i -g vercel
```

2. Vercel KV 연결:
```bash
vercel link
vercel env pull .env.local
```

3. 개발 서버 실행:
```bash
npm run dev
```

## API 엔드포인트

### GET /api/likes
좋아요 개수를 조회합니다.

**응답:**
```json
{
  "count": 4285
}
```

### POST /api/likes
좋아요를 증가시킵니다.

**응답:**
```json
{
  "count": 4286,
  "success": true
}
```

## 문제 해결

### KV 연결 오류가 발생하는 경우

1. Vercel Dashboard에서 **Storage** 탭 확인
2. Upstash KV 데이터베이스가 생성되어 있는지 확인
3. 프로젝트가 올바르게 연결되어 있는지 확인 (Link 버튼 확인)
4. 환경 변수가 자동으로 설정되었는지 확인:
   - Settings → Environment Variables에서 확인
   - `KV_REST_API_URL`과 `KV_REST_API_TOKEN`이 있는지 확인
5. 재배포 시도

### CORS 오류가 발생하는 경우

API 엔드포인트에 CORS 헤더가 이미 설정되어 있습니다. 
만약 문제가 발생하면 `api/likes.ts`의 CORS 설정을 확인하세요.

### Marketplace에서 Upstash KV를 찾을 수 없는 경우

**중요:** Marketplace에서는 "Upstash KV"가 아니라 **"Upstash for Redis"**를 찾으세요!

1. Vercel Dashboard → 프로젝트 → **Storage** 탭
2. **Create Database** 클릭
3. Marketplace에서 **"Upstash"** 또는 **"Redis"** 검색
4. **"Upstash for Redis"** 선택 (빨간색 아이콘)
5. 또는 직접 [Upstash Console](https://console.upstash.com/)에서 생성 후 Vercel에 연결

### 환경 변수 이름이 다른 경우

Upstash Redis를 설치한 후, Vercel Dashboard의 **Settings → Environment Variables**에서 확인하세요:
- `UPSTASH_REDIS_REST_URL`과 `UPSTASH_REDIS_REST_TOKEN`이 설정되어 있다면, 코드가 자동으로 이를 사용합니다.
- `KV_REST_API_URL`과 `KV_REST_API_TOKEN`이 설정되어 있어도 동일하게 작동합니다.

## 참고 자료

- [Vercel Marketplace Storage 문서](https://vercel.com/docs/marketplace-storage)
- [Upstash Redis 문서](https://docs.upstash.com/redis)

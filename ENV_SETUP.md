# 환경 변수 설정 가이드

## Upstash KV 환경 변수 확인 방법

### 1. 프로젝트 레벨 환경 변수 확인

현재 보신 페이지는 **Team 레벨**의 환경 변수입니다. 
Upstash KV의 환경 변수는 **프로젝트 레벨**에 자동으로 설정됩니다.

**확인 방법:**
1. Vercel Dashboard → **프로젝트 선택** (zero-nyang)
2. **Settings** 탭 클릭
3. 왼쪽 메뉴에서 **Environment Variables** 클릭
4. 여기서 프로젝트별 환경 변수를 확인할 수 있습니다

### 2. Upstash KV 연결 확인

환경 변수가 보이지 않는다면:

1. **Storage 탭으로 이동**
   - 프로젝트 → **Storage** 탭
   - `upstash-kv-cyan-book`이 보이는지 확인

2. **프로젝트 연결 확인**
   - `upstash-kv-cyan-book` 클릭
   - 프로젝트 목록에서 현재 프로젝트가 연결되어 있는지 확인
   - 연결되어 있지 않다면 **Link** 버튼 클릭

3. **환경 변수 자동 설정 확인**
   - Storage를 프로젝트에 Link하면 자동으로 환경 변수가 추가됩니다
   - 보통 다음 변수들이 설정됩니다:
     - `UPSTASH_REDIS_REST_URL`
     - `UPSTASH_REDIS_REST_TOKEN`
     - 또는 `KV_REST_API_URL`, `KV_REST_API_TOKEN`

### 3. 수동으로 환경 변수 추가 (필요한 경우)

만약 자동으로 설정되지 않았다면:

1. **Upstash Console에서 확인**
   - [Upstash Console](https://console.upstash.com/) 접속
   - `upstash-kv-cyan-book` 데이터베이스 선택
   - **REST API** 탭에서 URL과 Token 확인

2. **Vercel에 환경 변수 추가**
   - 프로젝트 → Settings → Environment Variables
   - **Add** 버튼 클릭
   - 다음 변수들을 추가:
     - **Name:** `UPSTASH_REDIS_REST_URL`
     - **Value:** Upstash Console에서 복사한 URL
     - **Environment:** Production, Preview, Development 모두 선택
     - **Add** 클릭
   
   - 다시 **Add** 버튼 클릭
     - **Name:** `UPSTASH_REDIS_REST_TOKEN`
     - **Value:** Upstash Console에서 복사한 Token
     - **Environment:** Production, Preview, Development 모두 선택
     - **Add** 클릭

### 4. 환경 변수 확인 후 재배포

환경 변수를 추가하거나 수정한 후에는:
1. **Deployments** 탭으로 이동
2. 최신 배포의 **Redeploy** 클릭
   - 또는 새 커밋을 푸시하여 자동 재배포

## 코드에서 사용하는 환경 변수

현재 코드(`api/likes.ts`)는 다음 환경 변수를 순서대로 확인합니다:

1. `UPSTASH_REDIS_REST_URL` (우선)
2. `KV_REST_API_URL` (대체)

토큰도 마찬가지:
1. `UPSTASH_REDIS_REST_TOKEN` (우선)
2. `KV_REST_API_TOKEN` (대체)

둘 중 하나만 있어도 작동합니다!

# 배포 체크리스트

## ✅ 완료된 작업
- [x] Upstash KV 추가됨 (`upstash-kv-cyan-book`)
- [x] API 엔드포인트 생성 (`api/likes.ts`)
- [x] 프론트엔드 통합 (`FinalCTA.tsx`)

## 다음 단계

### 1. 환경 변수 확인
Vercel Dashboard에서 환경 변수가 자동으로 설정되었는지 확인:
- Settings → Environment Variables
- 다음 변수들이 있는지 확인:
  - `UPSTASH_REDIS_REST_URL` 또는 `KV_REST_API_URL`
  - `UPSTASH_REDIS_REST_TOKEN` 또는 `KV_REST_API_TOKEN`

### 2. 패키지 설치
```bash
npm install
```

### 3. 배포
```bash
git add .
git commit -m "Add Upstash KV for like counter"
git push
```

Vercel이 자동으로 배포를 시작합니다.

### 4. 배포 확인
배포가 완료되면:
1. Vercel Dashboard에서 배포 상태 확인
2. 배포된 URL에서 테스트:
   - `https://zero-nyang.vercel.app/api/likes` (GET 요청 테스트)
   - 브라우저에서 좋아요 버튼 클릭 테스트

### 5. 테스트 방법

#### API 직접 테스트
```bash
# 좋아요 개수 조회
curl https://zero-nyang.vercel.app/api/likes

# 좋아요 증가
curl -X POST https://zero-nyang.vercel.app/api/likes
```

#### 브라우저에서 테스트
1. 배포된 사이트 접속
2. 좋아요 버튼 클릭
3. 좋아요 개수가 증가하는지 확인
4. 페이지 새로고침 후 개수가 유지되는지 확인

## 문제 해결

### 환경 변수가 없는 경우
1. Vercel Dashboard → 프로젝트 → Storage
2. `upstash-kv-cyan-book` 클릭
3. 프로젝트에 Link 되어 있는지 확인
4. Link 버튼 클릭하여 연결

### API 오류가 발생하는 경우
1. Vercel Dashboard → 프로젝트 → Functions
2. `api/likes` 함수의 로그 확인
3. 환경 변수가 올바르게 설정되었는지 확인

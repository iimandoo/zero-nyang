# Google Analytics 설정 완료 가이드

## 구현된 기능

✅ Google Analytics 4 (GA4) 통합 코드
✅ 이벤트 추적 (좋아요 클릭, 이메일 제출)
✅ 페이지뷰 자동 추적
✅ 유틸리티 함수 제공

## 설정 방법

### 1. Google Analytics 계정 생성

1. [Google Analytics](https://analytics.google.com/) 접속
2. **측정 시작** 클릭
3. 계정 정보 입력:
   - 계정 이름: "제로냥"
   - 속성 이름: "zero-nyang"
   - 시간대: **대한민국 (GMT+09:00)**
   - 통화: **대한민국 원 (₩)**
4. **만들기** 클릭

### 2. 측정 ID 확인

1. **데이터 스트림** → **웹** 선택
2. 웹사이트 URL: `https://zero-nyang.vercel.app`
3. 스트림 이름: "제로냥 웹사이트"
4. **스트림 만들기** 클릭
5. **측정 ID** 복사 (예: `G-XXXXXXXXXX`)

### 3. 환경 변수 설정

#### 방법 A: Vercel Dashboard에서 설정 (권장)

1. Vercel Dashboard → 프로젝트 → **Settings** → **Environment Variables**
2. **Add** 클릭
3. **Key**: `VITE_GA_MEASUREMENT_ID`
4. **Value**: 복사한 측정 ID (예: `G-XXXXXXXXXX`)
5. **Environment**: Production, Preview, Development 모두 체크
6. **Add** 클릭

#### 방법 B: 로컬 개발용 .env 파일

프로젝트 루트에 `.env.local` 파일 생성:
```
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

> **주의:** `.env.local`은 `.gitignore`에 포함되어 있어야 합니다.

### 4. 배포

```bash
git add .
git commit -m "Add Google Analytics integration"
git push
```

### 5. 확인

1. 배포 완료 후 웹사이트 접속
2. [Google Analytics 실시간 보고서](https://analytics.google.com/) 확인
3. 몇 분 내에 데이터가 표시됩니다

## 추적되는 이벤트

### 자동 추적
- **페이지뷰**: 페이지 로드 시 자동 추적

### 수동 추적 이벤트
- **좋아요 클릭** (`like_click`): 좋아요 버튼 클릭 시
- **이메일 제출** (`email_submit`): 이메일 폼 제출 시

## Google Analytics 대시보드에서 확인

### 실시간 보고서
- **Google Analytics** → **보고서** → **실시간**
- 현재 접속 중인 사용자 확인

### 이벤트 확인
- **보고서** → **참여도** → **이벤트**
- `like_click`, `email_submit` 이벤트 확인

### 사용자 행동 분석
- **보고서** → **참여도** → **페이지 및 화면**
- 페이지뷰, 평균 세션 시간 등 확인

### 전환 추적
- **보고서** → **전환** → **이벤트**
- 이메일 제출 전환율 확인

## 추가 이벤트 추적하기

다른 이벤트를 추적하려면 `src/utils/analytics.ts`의 함수를 사용하세요:

```typescript
import { trackEvent } from '../../utils/analytics';

// 커스텀 이벤트 추적
trackEvent('button_click', {
  event_category: 'engagement',
  event_label: 'CTA 버튼',
  value: 1
});
```

## 문제 해결

### 데이터가 표시되지 않는 경우

1. **측정 ID 확인**
   - 환경 변수가 올바르게 설정되었는지 확인
   - Vercel Dashboard에서 확인

2. **브라우저 콘솔 확인**
   - 개발자 도구 → Console
   - GA 관련 오류 확인

3. **Google Analytics 실시간 보고서 확인**
   - 실시간 보고서에서 즉시 확인 가능
   - 몇 분 지연될 수 있음

4. **재배포 확인**
   - 환경 변수 추가 후 재배포 필요

### 이벤트가 추적되지 않는 경우

1. **브라우저 확장 프로그램 확인**
   - 광고 차단기 등이 GA를 차단할 수 있음

2. **개발자 도구 → Network 탭**
   - `collect` 요청이 전송되는지 확인

3. **Google Analytics DebugView**
   - GA4의 DebugView에서 실시간 이벤트 확인

## 참고 자료

- [Google Analytics 4 문서](https://developers.google.com/analytics/devguides/collection/ga4)
- [GA4 이벤트 가이드](https://developers.google.com/analytics/devguides/collection/ga4/events)

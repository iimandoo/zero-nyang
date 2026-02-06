# Google Analytics 빠른 시작 가이드

## 가장 간단한 방법: index.html에 직접 추가

### 1. Google Analytics 측정 ID 받기

1. [Google Analytics](https://analytics.google.com/) 접속
2. 계정 생성 및 속성 설정
3. 측정 ID 복사 (예: `G-XXXXXXXXXX`)

### 2. index.html 수정

`index.html`의 `<head>` 태그 안에 다음 코드 추가:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**중요:** `G-XXXXXXXXXX`를 실제 측정 ID로 변경하세요!

### 3. 이벤트 추적 추가 (선택사항)

좋아요나 이메일 제출 같은 이벤트를 추적하려면:

```javascript
// 좋아요 클릭 시
gtag('event', 'like_click', {
  event_category: 'engagement',
  event_label: '좋아요 버튼'
});

// 이메일 제출 시
gtag('event', 'email_submit', {
  event_category: 'conversion',
  event_label: '이메일 제출'
});
```

## 이미 구현된 방법 (권장)

현재 코드에는 React 컴포넌트 방식으로 구현되어 있습니다:

1. **환경 변수 설정**
   - Vercel Dashboard → Settings → Environment Variables
   - `VITE_GA_MEASUREMENT_ID` = `G-XXXXXXXXXX`

2. **자동으로 작동**
   - 페이지뷰 자동 추적
   - 좋아요 클릭 추적
   - 이메일 제출 추적

3. **배포 후 확인**
   - Google Analytics 실시간 보고서에서 확인

## 두 방법 비교

| 방법 | 장점 | 단점 |
|------|------|------|
| **index.html 직접 추가** | 간단, 빠름 | 환경 변수 관리 어려움 |
| **React 컴포넌트** (현재 구현) | 환경 변수 관리 용이, 유연함 | 약간 복잡 |

둘 다 작동하지만, **React 컴포넌트 방식(현재 구현)**을 권장합니다!

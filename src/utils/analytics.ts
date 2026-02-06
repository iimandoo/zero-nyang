// Google Analytics 4 유틸리티

declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
    dataLayer: any[];
  }
}

// Google Analytics 초기화
export const initGA = (measurementId: string) => {
  // gtag.js 스크립트 로드
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script1);

  // dataLayer 및 gtag 초기화
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  window.gtag = gtag as typeof window.gtag;

  gtag('js', new Date());
  gtag('config', measurementId, {
    page_path: window.location.pathname,
  });
};

// 페이지뷰 추적
export const trackPageView = (path: string) => {
  if (typeof window.gtag === 'function') {
    window.gtag('config', process.env.VITE_GA_MEASUREMENT_ID || '', {
      page_path: path,
    });
  }
};

// 이벤트 추적
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, eventParams);
  }
};

// 좋아요 클릭 추적
export const trackLike = () => {
  trackEvent('like_click', {
    event_category: 'engagement',
    event_label: '좋아요 버튼',
  });
};

// 이메일 제출 추적
export const trackEmailSubmit = (email?: string) => {
  trackEvent('email_submit', {
    event_category: 'conversion',
    event_label: '이메일 제출',
    value: email ? 1 : 0,
  });
};

// 스크롤 깊이 추적
export const trackScrollDepth = (depth: number) => {
  trackEvent('scroll_depth', {
    event_category: 'engagement',
    event_label: `${depth}%`,
    value: depth,
  });
};

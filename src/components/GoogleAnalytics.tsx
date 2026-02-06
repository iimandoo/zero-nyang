import { useEffect } from 'react';
import { initGA, trackPageView } from '../utils/analytics';

interface GoogleAnalyticsProps {
  measurementId: string;
}

// React Router를 사용하지 않는 간단한 버전
export function SimpleGoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  useEffect(() => {
    // 측정 ID가 없으면 초기화하지 않음
    if (!measurementId) {
      return;
    }

    try {
      // Google Analytics 초기화
      if (!window.gtag) {
        initGA(measurementId);
      }

      // 초기 페이지뷰 추적
      if (window.gtag) {
        trackPageView(window.location.pathname, measurementId);
      }
    } catch (error) {
      console.error('Google Analytics 초기화 오류:', error);
    }
  }, [measurementId]);

  return null;
}

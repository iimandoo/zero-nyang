import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initGA, trackPageView } from '../utils/analytics';

interface GoogleAnalyticsProps {
  measurementId: string;
}

export function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  const location = useLocation();

  useEffect(() => {
    // Google Analytics 초기화
    if (!window.gtag) {
      initGA(measurementId);
    }
  }, [measurementId]);

  useEffect(() => {
    // 페이지 변경 시 추적
    if (window.gtag) {
      trackPageView(location.pathname);
    }
  }, [location]);

  return null;
}

// React Router를 사용하지 않는 경우의 간단한 버전
export function SimpleGoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  useEffect(() => {
    // Google Analytics 초기화
    if (!window.gtag) {
      initGA(measurementId);
    }

    // 초기 페이지뷰 추적
    if (window.gtag) {
      trackPageView(window.location.pathname);
    }
  }, [measurementId]);

  return null;
}

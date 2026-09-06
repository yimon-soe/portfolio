// src/hooks/useAnalytics.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-RQTLJ3L4H1', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);
}
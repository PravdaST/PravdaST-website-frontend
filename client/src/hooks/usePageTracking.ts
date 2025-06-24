// src/hooks/usePageTracking.ts
import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import ReactGA from 'react-ga4';

const usePageTracking = () => {
  const [location] = useLocation();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (import.meta.env.VITE_GA_MEASUREMENT_ID && import.meta.env.VITE_GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
      ReactGA.initialize(import.meta.env.VITE_GA_MEASUREMENT_ID);
      setInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (initialized) {
      ReactGA.send({ hitType: "pageview", page: location });
    }
  }, [initialized, location]);
};

export default usePageTracking;
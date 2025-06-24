import { useEffect } from 'react';

const KlaviyoSetup = () => {
  useEffect(() => {
    const companyId = import.meta.env.VITE_KLAVIYO_COMPANY_ID;
    if (!companyId) {
      console.warn('VITE_KLAVIYO_COMPANY_ID не е настроен');
      return;
    }

    // Зареждаме Klaviyo onsite JavaScript
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=${companyId}`;
    document.head.appendChild(script);

    // Почистваме script при размонтиране
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return null; // Компонентът не рендира нищо визуално
};

export default KlaviyoSetup;
import { useEffect } from "react";

const KlaviyoSetup = () => {
  const KLAVIYO_COMPANY_ID = import.meta.env.VITE_KLAVIYO_COMPANY_ID || "UTqrCz";

  if (!KLAVIYO_COMPANY_ID) {
    console.log("Klaviyo: Company ID not found");
    return null;
  }

  console.log("Klaviyo: Loading with Company ID:", KLAVIYO_COMPANY_ID);

  useEffect(() => {
    // Динамично зареждане на Klaviyo скрипт
    const script = document.createElement('script');
    script.async = true;
    script.type = 'text/javascript';
    script.src = `https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=${KLAVIYO_COMPANY_ID}`;
    document.head.appendChild(script);

    return () => {
      // Cleanup при unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [KLAVIYO_COMPANY_ID]);

  return null;
};

export default KlaviyoSetup;
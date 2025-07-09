import { Helmet } from "react-helmet-async";

const KlaviyoSetup = () => {
  const KLAVIYO_COMPANY_ID = import.meta.env.VITE_KLAVIYO_COMPANY_ID;

  // Само зарежда Klaviyo ако има валиден API ключ
  if (!KLAVIYO_COMPANY_ID || KLAVIYO_COMPANY_ID === "UTqrCz") {
    console.log("Klaviyo: Company ID not configured, skipping load");
    return null;
  }

  console.log("Klaviyo: Loading with Company ID:", KLAVIYO_COMPANY_ID);

  return (
    <Helmet>
      <script 
        async 
        type="text/javascript" 
        src={`https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=${KLAVIYO_COMPANY_ID}`}
        onError={() => console.log("Klaviyo script blocked by ad blocker or network")}
      />
    </Helmet>
  );
};

export default KlaviyoSetup;
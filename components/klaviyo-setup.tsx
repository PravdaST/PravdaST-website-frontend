import { Helmet } from "react-helmet-async";

const KlaviyoSetup = () => {
  const KLAVIYO_COMPANY_ID = import.meta.env.VITE_KLAVIYO_COMPANY_ID || "UTqrCz";

  if (!KLAVIYO_COMPANY_ID) {
    console.log("Klaviyo: Company ID not found");
    return null;
  }

  console.log("Klaviyo: Loading with Company ID:", KLAVIYO_COMPANY_ID);

  return (
    <Helmet>
      <script 
        async 
        type="text/javascript" 
        src={`https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=${KLAVIYO_COMPANY_ID}`}
      />
    </Helmet>
  );
};

export default KlaviyoSetup;
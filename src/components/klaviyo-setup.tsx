import { Helmet } from "react-helmet-async";

const KlaviyoSetup = () => {
  const KLAVIYO_COMPANY_ID = import.meta.env.VITE_KLAVIYO_COMPANY_ID;

  if (!KLAVIYO_COMPANY_ID) {
    return null; // Не прави нищо, ако company ID не е настроено
  }

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
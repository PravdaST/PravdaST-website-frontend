import { Helmet } from "react-helmet-async";

const KlaviyoSetup = () => {
  const KLAVIYO_PUBLIC_KEY = import.meta.env.VITE_KLAVIYO_PUBLIC_API_KEY;

  if (!KLAVIYO_PUBLIC_KEY) {
    return null; // Не прави нищо, ако ключът не е настроен
  }

  const klaviyoScript = `
    var _learnq = _learnq || [];
    _learnq.push(['account', '${KLAVIYO_PUBLIC_KEY}']);
    (function () {
      var b = document.createElement('script');
      b.type = 'text/javascript';
      b.async = true;
      b.src = 'https://static.klaviyo.com/analytics/js/klaviyo.js?v=1';
      var a = document.getElementsByTagName('script')[0];
      a.parentNode.insertBefore(b, a);
    })();
  `;

  return (
    <Helmet>
      <script>{klaviyoScript}</script>
    </Helmet>
  );
};

export default KlaviyoSetup;
import { Helmet } from 'react-helmet-async';

export function HelmetTest() {
  console.log('HelmetTest component rendering...');
  
  return (
    <Helmet>
      <title>TEST TITLE - Should Replace Pravdast</title>
      <meta name="description" content="TEST DESCRIPTION - Should appear in head" />
      <meta property="og:title" content="TEST OG TITLE" />
    </Helmet>
  );
}
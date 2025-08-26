import { NextSeo } from 'next-seo';

interface CampaignSEOProps {
  title: string;
  description: string;
  campaignName: string;
  ogImage?: string;
}

export const CampaignSEO = ({ 
  title, 
  description, 
  campaignName, 
  ogImage = "/images/og-default.png" 
}: CampaignSEOProps) => {
  const url = `https://www.pravdast.agency/campaigns/${campaignName}`;
  
  return (
    <NextSeo
      title={title}
      description={description}
      canonical={url}
      openGraph={{
        url,
        title,
        description,
        images: [
          {
            url: `https://www.pravdast.agency${ogImage}`,
            width: 1200,
            height: 630,
            alt: title,
            type: 'image/png',
          }
        ],
        site_name: 'Pravda Agency',
        locale: 'bg_BG',
      }}
      twitter={{
        handle: '@pravdagency',
        site: '@pravdagency',
        cardType: 'summary_large_image',
      }}
      additionalMetaTags={[
        {
          name: 'keywords',
          content: `${campaignName}, pravda agency, digital marketing, bulgaria, roi, business growth`,
        },
      ]}
    />
  );
};
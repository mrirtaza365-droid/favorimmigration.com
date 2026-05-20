import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  url?: string;
  type?: string;
}

export function SEO({ title, description, url = 'https://www.favorinsur.com', type = 'website' }: SEOProps) {
  const siteName = 'Favor Insur & Immigration Services';
  const fullTitle = `${title} | ${siteName}`;

  const schemaOrgJSONLD = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Favor Insur & Immigration Services LLC",
    "image": "https://www.favorinsur.com/logo.png",
    "@id": "https://www.favorinsur.com",
    "url": "https://www.favorinsur.com",
    "telephone": "",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1845 Town Center Boulevard, Suite 205",
      "addressLocality": "Orange Park",
      "addressRegion": "FL",
      "postalCode": "32003",
      "addressCountry": "US"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    },
    "sameAs": []
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteName} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <link rel="canonical" href={url} />
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
    </Helmet>
  );
}

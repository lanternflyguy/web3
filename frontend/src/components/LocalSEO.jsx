import React from 'react';
import { Helmet } from 'react-helmet-async';

const LocalSEO = ({ page = 'home' }) => {
  const baseTitle = "The Lantern Fly Guys - Spotted Lanternfly Removal";
  const baseDescription = "Professional spotted lanternfly elimination in Nassau County, Suffolk County & Dix Hills NY. Serving Long Island wineries with patent-pending BT Gen 2 technology. 85-90% elimination rate.";
  
  const pageConfigs = {
    home: {
      title: `${baseTitle} | Nassau County, Suffolk County, Dix Hills NY`,
      description: baseDescription,
      keywords: "spotted lanternfly removal Nassau County, spotted lanternfly Suffolk County, lanternfly elimination Dix Hills NY, Long Island pest control, winery pest control Long Island, lanternfly removal services Nassau, Suffolk County pest management",
      canonicalUrl: "https://thelanternflyguy.com"
    },
    wineries: {
      title: "Long Island Winery Pest Control - Spotted Lanternfly Removal | Nassau & Suffolk County",
      description: "Protect Long Island wineries from spotted lanternflies. Specialized vineyard pest control in Nassau County, Suffolk County & Dix Hills. OMRI organic compliant treatments for wine industry.",
      keywords: "Long Island winery pest control, vineyard lanternfly removal, Nassau County winery services, Suffolk County vineyard protection, Dix Hills wine pest management, Long Island spotted lanternfly wineries",
      canonicalUrl: "https://thelanternflyguy.com/wineries"
    },
    services: {
      title: "Pest Control Services Nassau County, Suffolk County | Spotted Lanternfly Removal Dix Hills",
      description: "Complete pest control services in Nassau County, Suffolk County & Dix Hills NY. Spotted lanternfly elimination, heritage tree preservation, commercial & residential pest management.",
      keywords: "pest control Nassau County, pest control Suffolk County, pest control Dix Hills NY, exterminator Nassau County, Long Island pest control, commercial pest control Nassau Suffolk",
      canonicalUrl: "https://thelanternflyguy.com/services"
    },
    contact: {
      title: "Contact Lanternfly Experts Nassau County, Suffolk County | Free Assessment Dix Hills NY",
      description: "Get free spotted lanternfly assessment in Nassau County, Suffolk County & Dix Hills NY. Call (516) 725-0672 for immediate response. Serving all of Long Island.",
      keywords: "lanternfly removal Nassau County phone, pest control Suffolk County contact, Dix Hills exterminator, Long Island pest control quote, Nassau County free assessment",
      canonicalUrl: "https://thelanternflyguy.com/contact"
    }
  };

  const config = pageConfigs[page] || pageConfigs.home;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://thelanternflyguy.com/#business",
    "name": "The Lantern Fly Guys",
    "alternateName": ["The Lantern Fly Guy Inc", "Lantern Fly Guys Nassau County", "Lantern Fly Guys Suffolk County"],
    "description": "Professional spotted lanternfly elimination specialists serving Nassau County, Suffolk County, and Dix Hills NY with patent-pending BT Gen 2 technology.",
    "url": "https://thelanternflyguy.com",
    "telephone": "+15169302508",
    "email": "chris@lanternflyguy.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "228 Park Avenue South",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "postalCode": "11003",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.7831",
      "longitude": "-73.9712"
    },
    "openingHours": [
      "Mo-Fr 09:00-17:00",
      "Sa 09:00-15:00"
    ],
    "serviceArea": [
      {
        "@type": "AdministrativeArea",
        "name": "Nassau County, NY"
      },
      {
        "@type": "AdministrativeArea", 
        "name": "Suffolk County, NY"
      },
      {
        "@type": "City",
        "name": "Dix Hills, NY"
      },
      {
        "@type": "City",
        "name": "Huntington, NY"
      },
      {
        "@type": "City",
        "name": "Babylon, NY"
      },
      {
        "@type": "City",
        "name": "Hempstead, NY"
      },
      {
        "@type": "City",
        "name": "Oyster Bay, NY"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Spotted Lanternfly Removal Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Nassau County Spotted Lanternfly Removal",
            "description": "Professional lanternfly elimination services throughout Nassau County NY",
            "areaServed": "Nassau County, NY"
          },
          "priceRange": "$$"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Suffolk County Spotted Lanternfly Removal", 
            "description": "Expert lanternfly pest control services across Suffolk County NY",
            "areaServed": "Suffolk County, NY"
          },
          "priceRange": "$$"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Long Island Winery Pest Control",
            "description": "Specialized spotted lanternfly removal for Long Island wineries and vineyards",
            "areaServed": "Long Island, NY"
          },
          "priceRange": "$$$"
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "100",
      "bestRating": "5",
      "worstRating": "4"
    },
    "sameAs": [
      "https://www.facebook.com/LanternFlyGuysInc",
      "https://www.linkedin.com/company/lantern-fly-guys-inc",
      "https://www.tiktok.com/@lanternflyguys",
      "https://www.yelp.com/biz/the-lantern-fly-guys-nassau-county",
      "https://www.google.com/maps/place/The+Lantern+Fly+Guys"
    ],
    "founder": [
      {
        "@type": "Person",
        "name": "Christopher Schenker",
        "jobTitle": "CEO & Co-Inventor",
        "telephone": "+15169302508",
        "email": "chris@lanternflyguy.com"
      },
      {
        "@type": "Person",
        "name": "Joseph Cusick", 
        "jobTitle": "CTO & Co-Inventor",
        "telephone": "+15167250672",
        "email": "joecusick@thelanternflyguy.com"
      }
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{config.title}</title>
      <meta name="title" content={config.title} />
      <meta name="description" content={config.description} />
      <meta name="keywords" content={config.keywords} />
      <link rel="canonical" href={config.canonicalUrl} />
      
      {/* Local SEO Meta Tags */}
      <meta name="geo.region" content="US-NY" />
      <meta name="geo.placename" content="Nassau County, Suffolk County, Dix Hills" />
      <meta name="geo.position" content="40.7831;-73.9712" />
      <meta name="ICBM" content="40.7831, -73.9712" />
      
      {/* Business Meta Tags */}
      <meta name="business.name" content="The Lantern Fly Guys" />
      <meta name="business.phone" content="(516) 725-0672" />
      <meta name="business.address" content="228 Park Avenue South, New York, NY 11003" />
      
      {/* Open Graph Local */}
      <meta property="og:type" content="business.business" />
      <meta property="og:title" content={config.title} />
      <meta property="og:description" content={config.description} />
      <meta property="og:url" content={config.canonicalUrl} />
      <meta property="og:image" content="https://thelanternflyguy.com/images/og-local-seo.jpg" />
      <meta property="business:contact_data:street_address" content="228 Park Avenue South" />
      <meta property="business:contact_data:locality" content="New York" />
      <meta property="business:contact_data:region" content="NY" />
      <meta property="business:contact_data:postal_code" content="11003" />
      <meta property="business:contact_data:country_name" content="United States" />
      <meta property="business:contact_data:phone_number" content="+15167250672" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema, null, 2)}
      </script>
      
      {/* Additional Location-Specific Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "The Lantern Fly Guys - Nassau & Suffolk County",
          "image": "https://thelanternflyguy.com/images/lanternfly-removal-long-island.jpg",
          "serviceArea": [
            "Nassau County, NY",
            "Suffolk County, NY", 
            "Dix Hills, NY",
            "Long Island, NY"
          ],
          "areaServed": [
            {
              "@type": "City",
              "name": "Dix Hills",
              "containedInPlace": {
                "@type": "AdministrativeArea",
                "name": "Suffolk County"
              }
            },
            {
              "@type": "AdministrativeArea",
              "name": "Nassau County"
            },
            {
              "@type": "AdministrativeArea", 
              "name": "Suffolk County"
            }
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Local Pest Control Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "name": "Emergency Spotted Lanternfly Removal",
                "description": "24/7 emergency lanternfly removal in Nassau and Suffolk County",
                "availability": "InStock"
              }
            ]
          }
        }, null, 2)}
      </script>
    </Helmet>
  );
};

export default LocalSEO;
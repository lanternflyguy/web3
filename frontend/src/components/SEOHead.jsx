import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({ 
  title = "The Lantern Fly Guys - Professional Spotted Lanternfly Elimination | New York, New Jersey, Pennsylvania",
  description = "Professional spotted lanternfly removal services in NY, NJ, PA. Patent-pending PPMP technology with 85-90% elimination rate. Free assessment. Call (516) 870-8356",
  keywords = "spotted lanternfly removal, pest control, tree preservation, lanternfly elimination, New York pest control, New Jersey pest control, Pennsylvania pest control, commercial pest management, residential pest control, HOA pest services, winery pest control, municipal pest management",
  canonicalUrl = "https://thelanternflyguy.com",
  ogImage = "https://thelanternflyguy.com/og-image.jpg",
  structuredData = null
}) => {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://thelanternflyguy.com/#business",
        "name": "The Lantern Fly Guys",
        "alternateName": "The Lantern Fly Guy Inc",
        "description": "Professional spotted lanternfly elimination specialists serving New York, New Jersey, and Pennsylvania with patent-pending PPMP technology.",
        "url": "https://thelanternflyguy.com",
        "telephone": "(516) 870-8356",
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
        "openingHours": "Mo-Fr 09:00-17:00",
        "serviceArea": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": "40.7831",
            "longitude": "-73.9712"
          },
          "geoRadius": "200"
        },
        "services": [
          "Spotted Lanternfly Elimination",
          "Integrated Pest Management",
          "Heritage Tree Preservation",
          "Commercial Pest Control",
          "Residential Pest Control",
          "HOA Pest Management",
          "Winery Pest Control",
          "Municipal Pest Services"
        ],
        "priceRange": "$$",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "100",
          "bestRating": "5",
          "worstRating": "1"
        },
        "founder": [
          {
            "@type": "Person",
            "name": "Christopher Schenker",
            "jobTitle": "CEO & Co-Inventor",
            "email": "chris@lanternflyguy.com"
          },
          {
            "@type": "Person", 
            "name": "Joseph Cusick",
            "jobTitle": "CTO & Co-Inventor",
            "email": "joecusick@thelanternflyguy.com"
          }
        ],
        "sameAs": [
          "https://www.facebook.com/thelanternflyguy",
          "https://www.linkedin.com/company/thelanternflyguy",
          "https://www.yelp.com/biz/the-lantern-fly-guys"
        ]
      },
      {
        "@type": "Service",
        "@id": "https://thelanternflyguy.com/#service",
        "name": "Spotted Lanternfly Elimination",
        "description": "Professional spotted lanternfly removal using patent-pending PPMP technology with 85-90% elimination rate.",
        "provider": {
          "@id": "https://thelanternflyguy.com/#business"
        },
        "areaServed": ["New York", "New Jersey", "Pennsylvania"],
        "serviceType": "Pest Control Service",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Pest Control Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Residential Spotted Lanternfly Removal",
                "description": "Complete spotted lanternfly elimination for homes and residential properties"
              }
            },
            {
              "@type": "Offer", 
              "itemOffered": {
                "@type": "Service",
                "name": "Commercial Pest Management",
                "description": "Professional pest management for businesses and commercial properties"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service", 
                "name": "HOA Community Services",
                "description": "Comprehensive community-wide spotted lanternfly management programs"
              }
            }
          ]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://thelanternflyguy.com/#website",
        "url": "https://thelanternflyguy.com",
        "name": "The Lantern Fly Guys",
        "description": "Professional spotted lanternfly elimination specialists",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://thelanternflyguy.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="The Lantern Fly Guys" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="The Lantern Fly Guys" />
      <meta name="copyright" content="The Lantern Fly Guys Inc" />
      
      {/* Local Business Meta Tags */}
      <meta name="geo.region" content="US-NY" />
      <meta name="geo.placename" content="New York" />
      <meta name="geo.position" content="40.7831;-73.9712" />
      <meta name="ICBM" content="40.7831, -73.9712" />
      
      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#1e293b" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
      
      {/* Preconnect to important domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://images.unsplash.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
    </Helmet>
  );
};

export default SEOHead;
import React from 'react';
import { Helmet } from 'react-helmet-async';

const GoogleAnalytics = ({ measurementId = "G-XXXXXXXXXX" }) => {
  return (
    <Helmet>
      {/* Google Analytics 4 */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', '${measurementId}', {
            // Enhanced ecommerce and conversion tracking
            send_page_view: true,
            page_title: document.title,
            page_location: window.location.href,
            custom_map: {
              'custom_parameter_1': 'phone_calls',
              'custom_parameter_2': 'form_submissions',
              'custom_parameter_3': 'service_area'
            }
          });

          // Custom events for pest control business
          gtag('event', 'page_view', {
            event_category: 'engagement',
            event_label: 'lanternfly_website_visit',
            custom_parameters: {
              service_area: 'Nassau_Suffolk_County',
              business_type: 'pest_control'
            }
          });

          // Phone call conversion tracking
          window.trackPhoneCall = function(phoneNumber, source) {
            gtag('event', 'conversion', {
              send_to: '${measurementId}/phone_call',
              value: 100.0,
              currency: 'USD',
              phone_number: phoneNumber,
              source: source
            });
          };

          // Form submission conversion tracking  
          window.trackFormSubmission = function(formType, serviceType) {
            gtag('event', 'conversion', {
              send_to: '${measurementId}/form_submission',
              value: 75.0,
              currency: 'USD',
              form_type: formType,
              service_type: serviceType
            });
          };
        `}
      </script>

      {/* Google Tag Manager (optional - for additional tracking) */}
      <script>
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-XXXXXXX');
        `}
      </script>

      {/* Facebook Pixel */}
      <script>
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          
          fbq('init', 'YOUR_PIXEL_ID');
          fbq('track', 'PageView');
          
          // Custom events for pest control
          fbq('track', 'ViewContent', {
            content_name: 'Spotted Lanternfly Removal Services',
            content_category: 'Pest Control',
            content_ids: ['lanternfly_removal'],
            value: 0.00,
            currency: 'USD'
          });
        `}
      </script>

      {/* Microsoft Clarity (for user behavior insights) */}
      <script type="text/javascript">
        {`
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "YOUR_CLARITY_ID");
        `}
      </script>
    </Helmet>
  );
};

export default GoogleAnalytics;
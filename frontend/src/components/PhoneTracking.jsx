import React from 'react';

const PhoneTracking = ({ 
  phoneNumber = "(516) 725-0672", 
  trackingId = "main-header",
  className = "",
  children 
}) => {
  const handlePhoneClick = (e) => {
    // Google Analytics 4 event tracking
    if (typeof gtag !== 'undefined') {
      gtag('event', 'phone_call', {
        event_category: 'engagement',
        event_label: trackingId,
        phone_number: phoneNumber,
        custom_parameters: {
          source: window.location.pathname,
          timestamp: new Date().toISOString()
        }
      });
    }

    // Facebook Pixel tracking
    if (typeof fbq !== 'undefined') {
      fbq('track', 'Contact', {
        content_name: 'Phone Call',
        content_category: 'Lead Generation',
        source: trackingId
      });
    }

    // Custom tracking for phone calls
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'phone_call_click',
        phone_number: phoneNumber,
        tracking_id: trackingId,
        page_url: window.location.href,
        timestamp: new Date().toISOString()
      });
    }

    // Console log for debugging
    console.log(`Phone call tracked: ${phoneNumber} from ${trackingId}`);
  };

  return (
    <a
      href={`tel:${phoneNumber.replace(/[^\d+]/g, '')}`}
      className={className}
      onClick={handlePhoneClick}
      data-tracking-id={trackingId}
      data-phone={phoneNumber}
    >
      {children || phoneNumber}
    </a>
  );
};

export default PhoneTracking;
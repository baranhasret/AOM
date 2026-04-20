// Google Analytics configuration
// Add your Google Analytics Measurement ID here

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || '';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Common event tracking functions
export const trackButtonClick = (buttonName: string) => {
  event({
    action: 'click',
    category: 'Button',
    label: buttonName,
  });
};

export const trackFormSubmit = (formName: string) => {
  event({
    action: 'submit',
    category: 'Form',
    label: formName,
  });
};

export const trackProductView = (productName: string) => {
  event({
    action: 'view',
    category: 'Product',
    label: productName,
  });
};

export const trackSearch = (searchTerm: string) => {
  event({
    action: 'search',
    category: 'Search',
    label: searchTerm,
  });
};

export const trackDownload = (fileName: string) => {
  event({
    action: 'download',
    category: 'File',
    label: fileName,
  });
};

export const trackOutboundLink = (url: string) => {
  event({
    action: 'click',
    category: 'Outbound Link',
    label: url,
  });
};

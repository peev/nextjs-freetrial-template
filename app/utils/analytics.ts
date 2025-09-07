// Analytics utility functions for click tracking
import { track as vercelTrack } from '@vercel/analytics';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const trackClick = (eventName: string, parameters?: Record<string, any>) => {
  // Google Analytics tracking
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'click',
      event_label: parameters?.label || eventName,
      value: parameters?.value,
      ...parameters,
    });
  }
  
  // Vercel Analytics tracking
  vercelTrack(eventName, parameters);
};

export const trackButtonClick = (buttonName: string, location?: string) => {
  const eventData = {
    button_name: buttonName,
    location: location || 'unknown',
  };
  
  trackClick('button_click', eventData);
};

export const trackLinkClick = (linkText: string, destination: string) => {
  const eventData = {
    link_text: linkText,
    destination: destination,
  };
  
  trackClick('link_click', eventData);
};

export const trackFormSubmit = (formName: string) => {
  const eventData = {
    form_name: formName,
  };
  
  trackClick('form_submit', eventData);
};

export const trackPageView = (pageName: string) => {
  const eventData = {
    page_name: pageName,
  };
  
  trackClick('page_view', eventData);
};

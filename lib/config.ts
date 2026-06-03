/**
 * Booking link for "Book a Call" CTAs.
 * Set NEXT_PUBLIC_BOOKING_URL to your Cal.com or Calendly URL
 * (e.g. https://cal.com/novative/discovery). Falls back to a placeholder.
 */
export const BOOKING_URL =
  process.env.NEXT_PUBLIC_BOOKING_URL || 'https://cal.com/novative';

/** Where lead-capture notifications are sent. */
export const LEAD_NOTIFY_EMAIL =
  process.env.LEAD_NOTIFY_EMAIL || 'contact@novative.dev';

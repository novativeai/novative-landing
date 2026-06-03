/**
 * Booking link for "Book a Call" CTAs.
 * Defaults to the live Calendly discovery call; override with
 * NEXT_PUBLIC_BOOKING_URL (Cal.com or Calendly) without a code change.
 */
export const BOOKING_URL =
  process.env.NEXT_PUBLIC_BOOKING_URL || 'https://calendly.com/novativeai/discovery-call';

/** Where lead-capture notifications are sent. */
export const LEAD_NOTIFY_EMAIL =
  process.env.LEAD_NOTIFY_EMAIL || 'contact@novative.dev';

export interface Testimonial {
  /** The client's words. */
  quote: string;
  /** Full name of the person. */
  name: string;
  /** Role + company, e.g. "Founder, Reelzila". */
  role: string;
  /** 1-5. Defaults to 5 if omitted. */
  rating?: number;
  /** Optional photo path under /public (e.g. "/testimonials/jane.jpg"). Falls back to initials. */
  avatar?: string;
}

/**
 * REAL client testimonials only.
 *
 * This array is intentionally EMPTY — the testimonials section and its review
 * schema render nothing until you add genuine quotes. Do NOT add invented
 * testimonials: fake reviews are deceptive and violate FTC guidance.
 *
 * To enable, add entries like:
 *   {
 *     quote: 'Novative shipped our MVP in three weeks and it just worked.',
 *     name: 'Jane Doe',
 *     role: 'Founder, Acme',
 *     rating: 5,
 *     avatar: '/testimonials/jane.jpg', // optional
 *   }
 */
export const testimonials: Testimonial[] = [];

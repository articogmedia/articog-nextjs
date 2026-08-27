/**
 * Analytics abstraction layer.
 *
 * Swap the provider in one place — components never import a vendor SDK directly.
 *
 * To connect a provider, replace the TODO blocks below:
 *   - Vercel Analytics: import { track } from "@vercel/analytics"
 *   - PostHog:          posthog.capture(name, properties)
 *   - Segment:          window.analytics?.track(name, properties)
 *   - Mixpanel:         mixpanel.track(name, properties)
 */

// ─── Types ────────────────────────────────────────────────────────────────────

type EventName =
  | "page_view"
  | "cta_click"
  | "form_submit"
  | "form_success"
  | "form_error"
  | "section_view";

interface TrackEvent {
  name: EventName;
  properties?: Record<string, string | number | boolean>;
}

// ─── Core ─────────────────────────────────────────────────────────────────────

export function track({ name, properties }: TrackEvent): void {
  if (typeof window === "undefined") return;

  if (process.env['NODE_ENV'] === "development") {
    // eslint-disable-next-line no-console
    console.log(`[Analytics] ${name}`, properties ?? {});
    return;
  }

  // TODO: integrate your analytics provider here
  // Example — Vercel Analytics:
  //   import { track as vaTrack } from "@vercel/analytics";
  //   vaTrack(name, properties);
}

// ─── Convenience helpers ──────────────────────────────────────────────────────

export function trackPageView(path: string): void {
  track({ name: "page_view", properties: { path } });
}

export function trackCTAClick(label: string, destination: string): void {
  track({ name: "cta_click", properties: { label, destination } });
}

export function trackFormSubmit(formName: string): void {
  track({ name: "form_submit", properties: { form: formName } });
}

export function trackFormSuccess(formName: string): void {
  track({ name: "form_success", properties: { form: formName } });
}

export function trackFormError(formName: string, reason: string): void {
  track({ name: "form_error", properties: { form: formName, reason } });
}

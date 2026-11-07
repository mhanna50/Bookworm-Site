export type BillingInterval = "month" | "year";
export const paidPlans = {
  writer: { monthly: 11.99, annual: 119.99, equivalent: "10.00", saving: 17 },
  author: { monthly: 16.99, annual: 179.99, equivalent: "15.00", saving: 12 },
} as const;

export function writerSignup(interval: BillingInterval) {
  const url = new URL("https://app.quillywriter.com/login");
  url.searchParams.set("mode", "signup");
  url.searchParams.set("plan", "basic");
  url.searchParams.set("interval", interval);
  return url.toString();
}

export const pricingFaqs = [
  ["Do I need a credit card for the free trial?", "No. Quilly includes a 30-day free trial of Writer's writing and planning tools, with no credit card required. Story Health is not included. You are not automatically charged."],
  ["What happens after the 30-day trial?", "Editing pauses after 30 days unless you explicitly purchase a subscription. Choose Writer for $11.99/month or $119.99/year. Your books remain saved and you can sign in to export your work without subscribing."],
  ["Can I cancel anytime?", "Yes. Cancellation stops renewal, and access continues through the end of your paid period. Annual subscriptions are prepaid for a year."],
  ["How much do I save with annual billing?", "Writer is $119.99 billed annually, equivalent to about $10.00/month: save $23.89 per year (17%, rounded) compared with 12 monthly payments. Author is planned at $179.99/year, about $15.00/month: save $23.89 (12%, rounded). The full annual total is charged upfront."],
  ["How does the Founding Writers discount work?", "The first 100 eligible new paid subscriptions can receive an automatic 20% recurring discount at checkout while redemptions remain. This promotion is separate from annual-billing savings. It stays with the uninterrupted subscription and does not automatically transfer if you cancel and resubscribe."],
  ["How many books can I create?", "Paid Writer and planned Author have no plan-based book cap. A three-book trial limit is planned but is not currently enforced."],
  ["Can I import and export my work?", "Yes. Import an existing DOCX manuscript and export your writing as DOCX or PDF. PDF import is not included. You can still export after your trial or paid editing access ends."],
  ["What will Author include?", "Author is coming soon. It is planned to include Writer's tools plus AI-assisted Story Health, with potential plot-hole and continuity suggestions. It cannot be purchased yet. Its AI allowance will be defined before launch."],
  ["Is Quilly only for fantasy writers?", "No. Quilly is built for long-form fiction across genres, including fantasy, mystery, romance, science fiction, thrillers, and more."],
] as const;

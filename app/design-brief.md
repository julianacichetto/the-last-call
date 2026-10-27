# Design brief: THE CASE FILES

## Project
Independent English-language sales landing page for a fictional printable mystery investigation game aimed at US buyers. First featured case: **The Last Call**. Original intellectual property; no competitor names, storylines, or artwork reused.

## Goal
Make a cold-traffic visitor understand the product in under 10 seconds, feel intrigued by the case, see what the downloadable game includes, and move toward a future CAKTO checkout. Do not claim a checkout, delivery automation, testimonials, or product contents are live until configured.

## Audience
US adults, couples, friends, mystery fans, and hosts looking for an at-home detective experience. Copy in natural US English. Mobile-first, readable, conversion-focused.

## Brand and visual language
Brand name THE CASE FILES. Cinematic analog crime-investigation archive, not gore or sensational real crime. Cool steel-blue light, smoke-gray/charcoal surfaces, bone-white evidence paper, one muted oxblood accent. One accent only. No orange/amber, neon cyan, purple glow, or beige/brass premium cliché. Sans display pairing: Cabinet Grotesk / Inter Tight with mono details.

## Signature motion
User selected cinematic animated experience. Intended effect: the evidence archive reveals itself as the visitor scrolls, with restrained document lifts, evidence-image parallax, and sequential chapter reveals. Honor prefers-reduced-motion. The Higgsfield generation service reported no available credits, so do not pretend a custom scroll-scrub film exists; implement a graceful CSS/DOM-based cinematic motion alternative unless generated media becomes available.

## Journey
1. Hero: The Last Call, one sentence, CTA to the case offer; dossier artifact visual.
2. The premise: a final voicemail, a closed motel, a timeline that does not add up.
3. Evidence table: sample evidence categories (voicemail transcript, suspect statements, timeline, photographs, case notes). Clearly framed as proposed product contents until the downloadable product is finalized.
4. How it works: download, print or use digitally, investigate, compare clues, solve.
5. Offer: one original printable case, digital download format to be finalized; price and CAKTO checkout are intentionally not invented.
6. FAQ: who it's for, print/digital use, difficulty, group play, digital delivery after checkout (only after checkout is configured).
7. Footer: contact, privacy, terms, refund policy links/anchors to be supplied before paid traffic.

## Conversion and trust
One CTA label, “Get the Case File”. No fake reviews, customer counts, urgency, guaranteed solve times, or unsupported claims. No price until owner confirms product/price. Checkout URL, Meta Pixel ID, delivery asset, support email, privacy/terms/refund details remain integration requirements.

## Layout
Dark cinematic single-page experience with asymmetrical evidence-table composition, oversized two-line headlines, generous negative space, tactile paper/document visuals built as semantic UI. Sections vary in composition. Mobile columns collapse explicitly. One page-wide accent and consistent soft-square radius. No giant gradient blobs, fake dashboard UI, or generic three-card feature row.

## Technical
React 19 + TanStack Start. Preserve template runtime and unrelated scaffold files. SSR-safe. Use reduced-motion fallbacks. No runtime Higgsfield SDK or authentication. No community feed publishing. Validate with typecheck/build and deploy only committed code.

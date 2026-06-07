# Portfolio Rebuild Plan

## Goal

Build a fast, premium, responsive portfolio that positions Usman Ghani as an Android-first product developer with AI/full-stack capability. The new site should feel modern and professional without heavy gimmicks, strange responsiveness, slow page transitions, or overloaded certificate/project sections.

## Archived Old Site

The existing static site has been moved into:

`old_portfolio/`

The root directory is now ready for a clean rebuild.

## Recommended Stack

Use React with Vite and TypeScript.

Why React over Angular for this portfolio:
- Smaller, faster single-page portfolio bundle when built carefully.
- Easier animation control with Framer Motion or Motion One.
- Better fit for a lightweight, content-driven portfolio.
- Easier future migration to Next.
 js if blog/case studies/SEO routes grow later.

Suggested tools:
- React + Vite + TypeScript
- Tailwind CSS or CSS Modules with design tokens
- Framer Motion for restrained reveal transitions
- Lucide React for icons
- Static JSON/TS data files for projects, certifications, experience, skills, and links
- Vite image/public asset strategy with AVIF/WebP already available from the old site

## Design Direction

Working theme: "Mobile product engineer, quietly premium."

Visual principles:
- Typography-led, not decorative.
- White/light neutral base with one confident accent color, plus an optional dark mode.
- Large first viewport with direct positioning: Android, AI, full-stack products.
- Use real app screenshots as the visual signature, especially portrait phone mockups.
- Motion should be functional: section reveals, hover polish, project transitions, no floating particles or loader theatrics.
- Desktop should use editorial/product-case-study layouts, not a generic card grid.
- Mobile should feel native: thumb-friendly nav, clean sections, no cramped horizontal tab carousels.

## Reference Designs

Use these as inspiration, not as templates to copy.

1. Chanh Dai - https://chanhdai.com/
   - Best for: compact credibility, modern developer identity, polished details, open-source/product proof.
   - Use idea: dense but readable profile blocks, metrics, sharp spacing, strong component discipline.

2. Rauno Freiberg - https://rauno.me/
   - Best for: minimal typography, restraint, timeless personal identity.
   - Use idea: sharp copy, spacious layout, deliberate navigation, no visual noise.

3. Delba de Oliveira - https://delba.dev/
   - Best for: proof-first work list, clean role positioning, direct CTA.
   - Use idea: project outcomes and professional focus before decoration.

4. Lee Robinson - https://leerob.com/work
   - Best for: simple authority, writing/content-first credibility, fast readable structure.
   - Use idea: conversational but professional intro, concise work narrative.

5. Awwwards Minimal Collection - https://www.awwwards.com/awwwards/collections/minimal/
   - Best for: premium spacing and stripped-back art direction.
   - Use idea: simplicity, but avoid slow experimental navigation.

6. Awwwards Developer Category - https://www.awwwards.com/websites/developer/
   - Best for: interaction quality and polished developer portfolios.
   - Use idea: premium transitions and responsive craft, but keep UX practical.

7. DEV_PORTFOLIOS - https://www.devportfolios.dev/
   - Best for: broad developer portfolio patterns and tech-tag inspiration.
   - Use idea: compare layout patterns, especially minimal/react portfolios.

8. Portfolio Gallery - https://www.portfoliogallery.dev/
   - Best for: filtered inspiration by mobile apps, minimal, modern, React, Angular, etc.
   - Use idea: validate that the final layout feels current and not template-like.

9. SiteBuilderReport software engineer examples - https://www.sitebuilderreport.com/inspiration/software-engineer-portfolios
   - Best for: recruiter-friendly engineering portfolio patterns.
   - Use idea: clear project stories, readable layout, professional credibility.

## Information Architecture

Homepage sections:
1. Hero
   - Name, role, short statement, CTA to projects/contact.
   - Suggested headline: "Android developer building AI-powered mobile products."
   - Supporting copy: "I build Kotlin/Jetpack Compose apps, Firebase/Supabase backends, and practical AI features for real-world workflows."

2. Proof Strip
   - 3 to 5 compact signals:
     - BS Computer Science, Namal University
     - Android/Kotlin focus
     - AI + Firebase/Supabase
     - Competitive programming award
     - Upwork/client work

3. Featured Work
   - 3 flagship case-study panels:
     - TraceIt
     - Ember
     - Snappy or Sonic
   - Each should include problem, role, stack, outcome, screenshot, and CTA.

4. Selected Projects
   - Smaller grid/list for ULearn, Lumina, Calculator, Spendly, UDO, TimSort, TubeDown, Treasure Hunting, Chess.
   - Group as Mobile Apps, AI/Labs, Web/DSA.

5. Capability System
   - Android: Kotlin, Jetpack Compose, Material Design
   - Backend/Data: Firebase, Supabase, MySQL
   - AI: Gemini API, ML Kit, AI fundamentals
   - Web: React/JS/Python tools

6. Experience + Education
   - Timeline or split columns.
   - Keep wording crisp and credible.

7. Certifications
   - Do not lead with all certificates.
   - Show grouped count and notable issuers first: IBM, Google, Meta, Microsoft, freeCodeCamp, airSlate, Forage.
   - Add expandable certificate gallery/filter later.

8. Awards
   - Compact honors section.

9. Contact
   - Email, GitHub, LinkedIn, resume, selected socials.

## Layout Concept

Desktop:
- Fixed-width content rail with asymmetrical feature panels.
- Hero split: left text and proof, right stacked phone screenshots from TraceIt/Ember/Snappy.
- Featured projects as alternating case-study bands, not repeated identical cards.
- Certification logos as a calm credibility strip, with optional expandable grid.

Tablet:
- Two-column hero becomes stacked visual below intro.
- Project bands become 2-column cards with preserved image aspect ratios.

Mobile:
- Single-column, sticky bottom or compact top nav.
- Hero text first, one screenshot stack after.
- Featured work cards with fixed image aspect ratios.
- Certifications collapsed by issuer to avoid massive scroll fatigue.

## Animation Rules

Allowed:
- Subtle opacity/translate section reveals.
- Hover lift under 4px.
- Phone screenshot carousel for featured project, user-controlled or slow and pausable.
- Smooth anchor scrolling.
- Microinteractions on buttons and links.

Avoid:
- Page loaders.
- Floating particles, circles, excessive blur blobs.
- Section-switch overlays.
- Typewriter loops.
- Heavy parallax.
- Animations that run constantly on mobile.

## Performance Plan

Targets:
- Lighthouse performance: 95+
- Accessibility: 95+
- Best practices: 95+
- SEO: 90+
- Initial JS: keep small and avoid unnecessary runtime effects.
- No blocking service worker until the new app is stable.

Implementation choices:
- Use data-driven rendering instead of one huge HTML file.
- Lazy-load below-the-fold images.
- Use existing AVIF/WebP screenshots where possible.
- Use `srcset`/responsive image sizes for screenshots.
- Avoid shipping Font Awesome webfont files; use tree-shaken icon components.
- Respect `prefers-reduced-motion`.
- Use CSS containment and stable aspect ratios to prevent layout shift.

## Content Cleanup Plan

Before implementation:
- Fix missing project dates for Spendly and Tic Tac Toe.
- Replace placeholder GitHub links or hide unavailable links.
- Correct TimSort repository link.
- Correct Goldman Sachs certificate image.
- Decide which Instagram URL is preferred.
- Confirm whether "Flutter Developer" should remain, because current project proof is mostly Kotlin/Android.

Copy rewrite direction:
- Replace "Hey there" bio with sharper professional copy.
- Avoid claiming too many identities equally.
- Lead with Android/mobile product development.
- Treat AI as applied capability, not buzzword.

## Implementation Phases

### Phase 1 - Foundation

- Create React + Vite + TypeScript app at the project root.
- Add project structure:
  - `src/data/profile.ts`
  - `src/data/projects.ts`
  - `src/data/certifications.ts`
  - `src/components`
  - `src/sections`
  - `src/assets`
- Copy only required optimized assets from `old_portfolio/`.
- Define design tokens: colors, type scale, spacing, breakpoints, radii, shadows.

### Phase 2 - Core Experience

- Build hero, nav, proof strip, featured projects, selected projects, contact.
- Implement responsive layout for desktop, tablet, and mobile.
- Add restrained Framer Motion reveals with reduced-motion fallback.
- Build accessible project cards and CTAs.

### Phase 3 - Depth And Credibility

- Add experience, education, awards, grouped certifications.
- Add optional project detail modal or case-study routes.
- Add certificate gallery only if it does not dominate the site.

### Phase 4 - Polish And Verification

- Run production build.
- Test desktop, tablet, and mobile in browser.
- Check layout at 1440, 1280, 1024, 768, 430, 390, and 360 widths.
- Run Lighthouse.
- Fix contrast, layout shift, oversized assets, and animation jank.
- Start local dev server for review.

## Recommended First Build Scope

Build a polished one-page React portfolio first, with data structured so project detail pages can come later. This will get the site fast and professional quickly while preserving a clean path toward deeper case studies.

Minimum launch content:
- Hero
- Featured work: TraceIt, Ember, Snappy
- Selected projects: 8 to 10 compact cards
- Skills/capabilities
- Experience/education
- Certifications summary
- Awards
- Contact

Do not launch with:
- Full certificate image popups for every certificate
- Heavy background effects
- Placeholder links visible as buttons
- Every old project displayed with equal emphasis

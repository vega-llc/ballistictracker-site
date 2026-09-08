# ballistictracker.com

Marketing website for **BallisticTracker**, an iPhone and iPad app by Vega LLC. Plain HTML, CSS, and JavaScript, with no build step.

## Files

- `index.html`: landing page, range tour, sample cards, collection, plans, roadmap, partners, FAQ, and signup.
- `support.html`: support information and product FAQ.
- `privacy.html`: privacy policy. Its policy wording is unchanged by the redesign.
- `styles.css`: forest green, warm paper, and ember visual system, responsive layouts, and printable-card examples.
- `script.js`: accessible navigation and range tour, card fitting, and the waitlist loader/fallback.
- `assets/`: logo, favicon, real app screenshots, landscape imagery, and existing social preview.
- `CNAME` and `.nojekyll`: GitHub Pages configuration. Keep both files.

## Preview

From this directory, run `python3 -m http.server 8848`, then open `http://localhost:8848/`. There is no package installation or build step. Fonts and the existing email form require an internet connection; system fonts and email contact links provide fallbacks.

## Page behavior

The range tour uses six tabs with arrow-key, Home, and End navigation. On small screens, the menu button expands all main navigation links. Escape closes the menu and returns focus to the button. Without JavaScript, all tour stages and navigation links remain visible.

The four range-card examples retain their original sample values. Cards scale to fit when there is sufficient space; narrower screens can scroll each card horizontally. These examples represent the **planned range-card update after launch**. Previewing is planned to be free, with printing and exporting through Pro.

The homepage uses one email form, at `#waitlist`. Every early-access button goes there. If the form fails to load or remains unavailable after five seconds, a direct email signup link appears. If JavaScript is disabled, an email link appears immediately. The existing account and form configuration are retained. Confirm your address through the email sent after signup.

## Launch state

All three pages currently use `<body class="pre-launch">`. This shows `.cta-waitlist` content and hides `.cta-launched` content. To prepare the site for launch:

1. Replace every `https://apps.apple.com/app/idREPLACE-ME` URL with the actual App Store URL.
2. Change the body class in `index.html`, `support.html`, and `privacy.html` from `pre-launch` to `launched`.
3. Review page titles, descriptions, social metadata, FAQ, and roadmap for any remaining pre-launch statements. Confirm plan details before publishing them.
4. Verify App Store links and the launched appearance on desktop and mobile. Retire or repurpose the waitlist form when appropriate.

The placeholder App Store links are hidden in the current pre-launch state. A real App Store URL is required before changing that state.

## Publishing

GitHub Pages serves the repository root on `main` at `ballistictracker.com`. Publishing requires pushing the approved changes to that branch. Preview and review changes before publishing.

## Assets

The `shot-*.png` images are actual app captures. Preserve their content and aspect ratios. `field-hero.webp` is the desktop landscape; `field-hero-mobile.webp` is the smaller mobile version. `assets/og.png` remains the existing social image, with `assets/og.html` as its source composition.

## Landscape provenance

The landscape is an original AI-generated visual created with built-in image generation for this redesign, not a photograph documenting a particular location. The production files are `assets/field-hero.webp` (1672 × 941) and `assets/field-hero-mobile.webp` (960 × 541).

Generation prompt:

> Use case: photorealistic-natural
> Asset type: panoramic premium outdoor website hero background, wide 2048x1152 landscape composition.
> Primary request: A beautiful authentic American West mountain valley at first light, photographed like a premium outdoor field journal.
> Scene/backdrop: Sweeping misty valley with layered forested foothills, a rugged plausible mountain ridgeline across the upper right, dark evergreen foreground, and golden dry grasses along the lower right.
> Composition/framing: Wide cinematic landscape. Keep the entire left half naturally dark, calm and low contrast with forest shadows and soft mist, suitable for overlaying a large white headline. Sunrise and mountain focal point centered-right. Horizon near the upper third.
> Lighting/mood: Restrained amber dawn, deep forest green shadows, soft grey sage mist, calm wild atmosphere. Realistic rich natural detail and subtle film grain, not glossy or overprocessed.
> Constraints: Landscape photograph only. No people, weapons, animals, buildings, roads, text, logos, watermark, interface, or app. Avoid oversaturated orange, fantasy mountains, dramatic fake rays, and illustration.

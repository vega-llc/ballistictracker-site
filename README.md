# ballistictracker.com

Marketing site for **BallisticTracker** (iOS app by Vega LLC). Plain static HTML/CSS, no build step, no dependencies.

## Files
```
index.html      Landing page
privacy.html    Privacy policy (required by the App Store)
support.html    Support / FAQ (required by the App Store)
styles.css      All styling (dark tactical theme, amber accents, paper-card components)
assets/         Logo, favicon, app screenshots (shot-*.png), social preview (og.html → og.png)
CNAME           Custom domain — do not delete
.nojekyll       Serve files as-is
```

## Pre-launch vs launched (the one switch)
Every call to action exists twice in the HTML: a `.cta-waitlist` element (the embedded waitlist form or a "Get early access" link) and a `.cta-launched` element (App Store button). The `<body>` class picks which one shows:

- `<body class="pre-launch">` → waitlist (current)
- `<body class="launched">` → App Store buttons

## Launch day checklist
1. In `index.html`, `support.html`, `privacy.html`: change `<body class="pre-launch">` to `<body class="launched">`.
2. Find/replace `https://apps.apple.com/app/idREPLACE-ME` with the real App Store URL in all three files.
3. Update the `<title>`, `description`, Open Graph, Twitter, and JSON-LD text in all three pages from "Coming to the App Store" wording to live wording.
4. Push to `main`; the site redeploys in about a minute.
5. Send the launch email to the waitlist, then deactivate the embedded form.

## Waitlist
Embedded third-party email form, double opt-in, email only. The loader script is in `<head>` of `index.html`; the form renders into the placeholder div in the hero and again in the closing section. If the script is blocked, the hero falls back to a mailto link after a few seconds and the closing section links to the hero. Account and form identifiers live in the private ops notes, not here.

## Regenerating assets
- **Phone screenshots** are app captures downscaled to 640 px wide: `sips -s format png --resampleWidth 640 in.png --out assets/shot-name.png`.
- **Social preview:** edit `assets/og.html`, then render it at 1200×630 with a headless browser to `assets/og.png`.
- **Range cards** are hand-written HTML in `index.html` for a sample .308 load. The gallery scales each 640 px card to its grid cell with the small script in `index.html`.

## Editing and deploy
Open the `.html` files and change the text. Preview locally with `python3 -m http.server` in this folder. Push to `main` and changes go live in about a minute.

# McCombs MBA Tech Club — website

Single-page marketing site for the MBA Tech Club. It is plain **HTML + CSS + JavaScript** (no framework, no build step).

## Live site

The site is deployed on **Netlify** from this GitHub repository. After you merge or push to the branch Netlify watches (usually `master`), Netlify rebuilds and publishes within about one to two minutes.

**Add your public URL here** (Netlify dashboard → Site settings → Domain management), for example: `https://your-site-name.netlify.app/`

## Repository layout

| File | What to edit |
|------|----------------|
| [`index.html`](index.html) | Page text, headings, links, team section markup |
| [`site.css`](site.css) | Colors, fonts, spacing, layout |
| [`site.js`](site.js) | Trivia questions/answers, page-switching behavior |
| [`assets/`](assets/) | Team PNGs (`team-01.png` …) and initiative JPGs (`event-01.jpg`, …) |

More detail: [`docs/SITE_GUIDE.md`](docs/SITE_GUIDE.md).

## Update the website (GitHub only, no terminal)

1. Open this repository on GitHub.
2. Navigate to the file you need (for most text changes, start with `index.html`).
3. Click the pencil icon **Edit this file**.
4. Make your change, scroll down, add a short **commit message** (what you changed), and click **Commit changes**.
5. Wait for Netlify to finish deploying, then refresh the live site.

If something looks wrong after a deploy, see [`docs/TROUBLESHOOTING.md`](docs/TROUBLESHOOTING.md). For basic GitHub terms, see [`docs/GLOSSARY.md`](docs/GLOSSARY.md).

## After renaming the entry file (already done in this repo)

The site entry point is **`index.html`** at the repository root. Netlify should publish the **root** of the repo (`.`). If your Netlify site was previously configured to open `mba-tech-club.html` directly, use the default document at `/` or confirm **Publish directory** is `.` in Netlify → **Build & deploy** → **Continuous deployment**.

A redirect from `/mba-tech-club.html` to `/` is defined in [`netlify.toml`](netlify.toml) so old links keep working.

## Optional: rename `master` to `main`

If you rename the default branch on GitHub, update Netlify (**Site settings** → **Build & deploy** → **Production branch**) to match so deploys still run.

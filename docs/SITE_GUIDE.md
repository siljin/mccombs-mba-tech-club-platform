# Site guide — what to edit

Use this when you only need to change text, links, colors, or trivia. You can do everything in the **GitHub website** (no coding tools required on your computer).

## Which file do I open?

| I want to… | Open this file |
|------------|-----------------|
| Change wording on the page, buttons, footer, or email links | `index.html` |
| Change orange/dark colors, fonts, spacing, or how things look | `site.css` |
| Change the Austin tech trivia cards | `site.js` (look for `triviaData`) |

## Do and don’t

**Do**

- Change only the text inside the tags you care about (between `>` and `<`).
- Keep quotation marks that wrap links and emails: `href="..."` and `mailto:...` must stay paired.

**Don’t**

- Remove `<`, `>`, or quotation marks around attributes unless you know exactly what you are doing.
- Rename `index.html`, `site.css`, or `site.js` without updating the references in `index.html` (the `<link>` and `<script>` tags in the `<head>` and end of the page).

## Common edits

**Club email (appears in several places)**  
In `index.html`, search for `GBTG@mccombs.utexas.edu` and replace each occurrence if the address changes.

**LinkedIn or Instagram**  
In `index.html` (and possibly footer links), search for `linkedin.com` or `instagram.com` and update the URLs.

**Copyright year**  
In `index.html`, search for the footer line containing `MBA Tech Club` and `McCombs` and update the year if needed.

**Trivia**  
In `site.js`, find the list `triviaData = [`. Each item looks like `{ q: "question", a: "answer" }`. Copy that pattern for new cards. Use `\"` inside a question if you need a double quote inside the text, or use single quotes on the outside.

**Team photos**  
Photos are embedded inside `index.html` as long lines (data URLs). Replacing them is easier if a technical helper exports a small image and swaps the `src="data:image/..."` value, or later moves images into an `assets/` folder.

## Fonts

The site loads **Google Fonts** (DM Sans and DM Serif Display) from the internet. If fonts look wrong, check that the machine has internet access; the font lines are near the top of `index.html`.

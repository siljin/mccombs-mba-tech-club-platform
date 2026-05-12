# Site guide — what to edit

Use this when you only need to change text, links, colors, or trivia. You can do everything in the **GitHub website** (no coding tools required on your computer).

## Which file do I open?

| I want to… | Open this file |
|------------|-----------------|
| Change wording on the page, buttons, footer, or email links | `index.html` |
| Change orange/dark colors, fonts, spacing, or how things look | `site.css` |
| Change the Austin tech trivia cards | `site.js` (look for `triviaData`) |
| Swap team headshots or initiative photos | Files in [`assets/`](../assets/) (see **Team and event photos** below) |

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

**Team and event photos**  
Images live in the **`assets/`** folder:

- **`team-01.png` … `team-10.png`** — Leadership and team headshots. Each `<img>` in `index.html` points at one of these (for example `src="assets/team-03.png"`). To replace a photo: upload a new image with the **same filename** (overwrite the file in `assets/`), or upload under a new name and change the matching `src="assets/..."` line in `index.html` next to that person’s name.
- **`event-01.jpg`**, **`event-02.jpg`** — Photos on the Initiatives page. Same idea: replace the file or change the `src` in `index.html`.

Use **square or roughly square** images for headshots when possible (they are shown in a circle). Keep file sizes reasonable (under ~500 KB each is a good target) so the site loads quickly.

## Fonts

The site loads **Google Fonts** (DM Sans and DM Serif Display) from the internet. If fonts look wrong, check that the machine has internet access; the font lines are near the top of `index.html`.

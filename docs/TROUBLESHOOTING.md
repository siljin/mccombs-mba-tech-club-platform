# Troubleshooting

## I saved my edit on GitHub but the live site did not change

1. Wait **one to two minutes** after committing. Deploys are not instant.
2. On the live site, try a **hard refresh**:  
   - Mac: `Cmd + Shift + R`  
   - Windows: `Ctrl + Shift + R`
3. Open **Netlify** → your site → **Deploys**. Confirm the latest deploy is **Published** (green). If it failed, open that deploy and read the log; often a typo in HTML will still publish for static sites, so a failed deploy is less common than a caching issue.

## The Netlify deploy failed

- Open the failed deploy log in Netlify and read the last error lines.
- For this project there is **no build command**; failures are unusual unless Netlify settings were changed (for example a custom build command was added by mistake). In **Site settings** → **Build & deploy**, the build command should be empty and **Publish directory** should be `.` (the repository root).

## Something looks broken after my edit

- On GitHub, open the file you changed and use **History** (or **Blame**) to compare with the previous version and undo a mistaken deletion.
- If you use **Pull requests**, Netlify can show a **Deploy preview** link on the PR so you can check the site before merging.

## I cannot edit the repository

You need **write access** to the GitHub repository. Ask the repository owner or the club’s tech contact to add your GitHub account as a collaborator.

## Old link to mba-tech-club.html

Bookmarks to `/mba-tech-club.html` should redirect to `/` automatically (see `netlify.toml`). If they do not, confirm the site is deployed from this repo’s current `netlify.toml`.

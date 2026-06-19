# Edge Traffic Lab website

A responsive, single-page marketing website built from the Edge Traffic Lab concept note.

## Preview

Open `index.html` directly, or use the VS Code Live Server extension.

## Automatic deployment

Cloudflare Pages deploys the website automatically whenever the `main` branch is pushed to GitHub.

One-time Cloudflare setup:

1. Create an empty GitHub repository named `edgetrafficlabs-website`.
2. Publish this local repository to that GitHub repository from VS Code.
3. In Cloudflare, open **Workers & Pages** and select **Create application**.
4. Choose **Pages**, then **Connect to Git**.
5. Authorize GitHub and select `edgetrafficlabs-website`.
6. Use these build settings:
   - Production branch: `main`
   - Framework preset: `None`
   - Build command: leave blank
   - Build output directory: `/`
7. Deploy, then open **Custom domains** and attach the Edge Traffic Lab domain.

Normal publishing workflow:

1. Edit the website in VS Code.
2. Open **Source Control**.
3. Enter a short commit message and select **Commit**.
4. Select **Sync Changes** or **Push**.
5. Cloudflare automatically publishes the update.

## Files

- `index.html` - page structure and content
- `styles.css` - responsive visual system
- `script.js` - mobile navigation and scroll reveals
- `assets/favicon.svg` - site icon

Before publishing, confirm the contact email used in `index.html`.

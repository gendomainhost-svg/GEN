# Deploy GEN to Cloudflare Pages

Follow these steps so the site builds and appears correctly.

## 1. Create a Pages project

- In [Cloudflare Dashboard](https://dash.cloudflare.com) go to **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
- Choose **GitHub** and select the repo **gendomainhost-svg/GEN**.
- Click **Begin setup**.

## 2. Framework preset

- Select **"Next.js (Static HTML Export)"** if you see it in the dropdown.  
  That preset sets the build command and output directory for you.
- If that option is not available, select **"None"** and in the next step set the build command and output directory yourself.

## 3. Build configuration (must match exactly)

| Setting | Value |
|--------|--------|
| **Project name** | Any (e.g. `gen` or `gen-website`) |
| **Production branch** | `main` |
| **Build command** | `npm run build` |
| **Build output directory** | `out` |

The output directory **must** be `out`. If it is `build`, `dist`, or empty, the site will not work.  
(If you chose "Next.js (Static HTML Export)", these may already be filled in; just confirm **Build output directory** is `out`.)

## 4. Environment variables (optional)

- **NODE_VERSION** = `18`  
  (Recommended so Cloudflare uses Node 18; the project includes a `.nvmrc` for this.)

You can leave this empty; Cloudflare often defaults to a recent Node version.

## 5. Deploy

- Click **Save and Deploy**.
- Wait for the build to finish. If it fails, open the build log and fix the reported error.
- When the build succeeds, the site URL will be shown (e.g. `https://gen.pages.dev`).

## 6. If the deployment “doesn’t run” or shows nothing

- **Build output directory:** In **Settings** → **Builds & deployments** → **Build configurations**, set **Build output directory** to exactly: **out**.
- **Redeploy:** **Deployments** → open the three dots on the latest deployment → **Retry deployment**.
- **Build logs:** Open the latest deployment and check **View build log** for errors (e.g. `npm run build` failing or wrong output path).

## 7. If the build fails

- Ensure **Build command** is exactly: `npm run build`.
- Ensure **Build output directory** is exactly: `out` (no trailing slash).
- Add **NODE_VERSION** = `18` under **Settings** → **Environment variables** and redeploy.

Once the output directory is `out` and the build succeeds, the deployment should run and the site will load.

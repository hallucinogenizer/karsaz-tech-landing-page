# GitHub Pages Deployment Guide

This repository is configured to deploy to GitHub Pages at **karsaztech.com**.

## Initial Setup Steps

### 1. Enable GitHub Pages in Repository Settings

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
4. Save the settings

### 2. Configure Custom Domain (karsaztech.com)

1. In the same **Settings** → **Pages** section
2. Under **Custom domain**, enter: `karsaztech.com`
3. Check **Enforce HTTPS** (GitHub will automatically configure this)
4. Click **Save**

### 3. DNS Configuration

You need to configure your DNS records for `karsaztech.com`. **Use A records** (not CNAME) if you have multiple GitHub Pages repositories, as CNAME at root can only point to one repository.

**A Records (Required for Multiple Repos)**

GitHub Pages requires both the root domain (`karsaztech.com`) AND the www subdomain (`www.karsaztech.com`) to be configured.

**For Root Domain (karsaztech.com):**

Add these 4 A records:
```
Type: A
Name: @
Value: 185.199.108.153
TTL: 3600

Type: A
Name: @
Value: 185.199.109.153
TTL: 3600

Type: A
Name: @
Value: 185.199.110.153
TTL: 3600

Type: A
Name: @
Value: 185.199.111.153
TTL: 3600
```

**For www Subdomain (www.karsaztech.com):**

Add these 4 A records (same IPs as root):
```
Type: A
Name: www
Value: 185.199.108.153
TTL: 3600

Type: A
Name: www
Value: 185.199.109.153
TTL: 3600

Type: A
Name: www
Value: 185.199.110.153
TTL: 3600

Type: A
Name: www
Value: 185.199.111.153
TTL: 3600
```

**Important for Cloudflare Users:**
- Set all A records (both root and www) to **DNS-only mode** (grey cloud ☁️, NOT orange cloud 🟠)
- **DO NOT enable proxying** - GitHub Pages needs direct DNS access for domain verification
- Proxying can interfere with GitHub's SSL certificate provisioning and domain verification

*Note: GitHub will verify the domain and create a CNAME file automatically when you add the custom domain in settings. This CNAME file is stored in your repo and doesn't affect your DNS records.*

### 4. Environment Variables

The workflow is already configured with `NEXT_PUBLIC_SITE_URL: https://karsaztech.com`. If you need to change this, edit `.github/workflows/deploy.yml`.

## How Deployment Works

1. **Automatic Deployment**: Every push to the `main` branch triggers a new deployment
2. **Manual Deployment**: You can also trigger deployment manually from the **Actions** tab
3. **Build Process**:
   - Installs dependencies using pnpm
   - Builds the Next.js app as static files (outputs to `/out`)
   - Deploys to GitHub Pages

## Local Testing

Before pushing, you can test the static build locally:

```bash
pnpm build
pnpm start
# or just open the /out directory with a static server
```

## Troubleshooting

### Build Fails
- Check the **Actions** tab for error logs
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

### Domain Not Working
- Wait 24-48 hours for DNS propagation
- Verify DNS records are correct
- Check GitHub Pages settings show the custom domain as verified
- Ensure `CNAME` file exists in the repository root (GitHub creates this automatically)

### Images Not Loading
- Images are set to `unoptimized: true` for static export
- All external images should load correctly

## Files Configured

- ✅ `next.config.mjs` - Static export enabled
- ✅ `.github/workflows/deploy.yml` - Deployment workflow
- ✅ `public/.nojekyll` - Disables Jekyll processing
- ✅ `src/app/robots.ts` - Uses environment variable for sitemap URL
- ✅ `src/app/sitemap.ts` - Uses environment variable for base URL

## Next Steps After First Deployment

1. **Verify the site**: Visit `https://karsaztech.com` after deployment completes
2. **Check robots.txt**: Visit `https://karsaztech.com/robots.txt`
3. **Check sitemap**: Visit `https://karsaztech.com/sitemap.xml`
4. **Test SEO**: Use Google Search Console to submit your sitemap


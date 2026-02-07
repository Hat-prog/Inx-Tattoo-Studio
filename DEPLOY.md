# Deployment Guide

## The Issue
GitHub Actions requires billing verification for some accounts. If you're seeing "account locked due to billing issue", you have two options:

## Option 1: Manual Deployment (No GitHub Actions Required)

This method deploys directly without using GitHub Actions:

1. **Build locally:**
   ```bash
   npm run build
   ```

2. **Deploy to gh-pages branch:**
   - Go to your repository on GitHub
   - Go to Settings → Pages
   - Under "Source", select "Deploy from a branch"
   - Select branch: `gh-pages` and folder: `/ (root)`
   - Click Save

3. **Push the dist folder to gh-pages branch:**
   ```bash
   # Install gh-pages package (one-time setup)
   npm install --save-dev gh-pages
   
   # Add deploy script to package.json (already done)
   # Then run:
   npm run deploy
   ```

## Option 2: Fix GitHub Billing Issue

If you want to use GitHub Actions:

1. Go to GitHub Settings → Billing
2. Verify your account (may require adding a payment method, even if you stay on free tier)
3. Once verified, the Actions workflow will work automatically

## Option 3: Use Alternative Hosting (Recommended if GitHub is blocked)

### Netlify (Free, No Billing Required)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your `dist` folder
3. Or connect GitHub repo and set:
   - Build command: `npm run build`
   - Publish directory: `dist`

### Vercel (Free, No Billing Required)
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. It will auto-detect Vite and deploy automatically

## File Sizes
Your video file (1.63MB) is **NOT** the issue. GitHub Pages supports files up to 1GB. The problem is the GitHub Actions billing lock, not file sizes.

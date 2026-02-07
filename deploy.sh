#!/bin/bash
# Manual deployment script for GitHub Pages
# Run this after building: npm run build

# Build the project
npm run build

# Create or checkout gh-pages branch
git checkout --orphan gh-pages
git reset --hard

# Copy dist contents to root
cp -r dist/* .

# Commit and push
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages --force

# Return to main branch
git checkout main

echo "Deployment complete! Enable GitHub Pages to use gh-pages branch in settings."

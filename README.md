# INX Tattoo Studio - Landing Page

A bold, modern single-page landing page for INX Tattoo Studio in Lincoln.

## Features

- **Hero Video Background** - Full-screen looping video with fallback
- **Responsive Gallery** - 8 tattoo images in a responsive grid
- **Mobile-First Design** - Optimized for all screen sizes
- **Bold Aesthetic** - Black/white/pink color scheme with checkerboard accents
- **Fast Performance** - Optimized assets and lazy loading

## Tech Stack

- Vite (build tool)
- Vanilla JavaScript
- CSS3 with custom properties
- Google Fonts (Bebas Neue, Inter)

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## Deployment

### GitHub Pages

1. Build the project: `npm run build`
2. Push the `dist` folder to your GitHub repository
3. Enable GitHub Pages in repository settings
4. Set source to `/dist` folder

### Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Or connect your GitHub repo and set build command: `npm run build`
4. Set publish directory: `dist`

## Assets

All assets should be in the `public/` folder:
- `video.mp4` - Hero background video
- `logo.jpg` - Studio logo
- `tattoo1.jpg` through `tattoo8.jpg` - Gallery images

## Customization

### Update Contact Links

Edit `index.html` to update:
- Instagram link (line ~XX)
- WhatsApp number (replace `PLACEHOLDER` in `wa.me/PLACEHOLDER`)
- Email address (update `mailto:` link)

### Colors

Edit CSS variables in `src/main.css`:
```css
:root {
  --black: #000000;
  --white: #FFFFFF;
  --pink: #FF1493;
  --pink-glow: rgba(255, 20, 147, 0.6);
}
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Video autoplay works on most modern browsers

## Notes

- Video is set to crop bottom 15-20% to hide watermark
- All images are lazy-loaded for performance
- Smooth scroll behavior for anchor links
- Fixed logo with subtle pulse animation

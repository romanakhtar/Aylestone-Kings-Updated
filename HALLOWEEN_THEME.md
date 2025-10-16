# 🎃 Aylestone Taxis - Halloween Theme Implementation

## Overview
This Halloween theme implementation adds seasonal styling and effects to the Aylestone Taxis website during October, automatically disabling after November 1st.

## Features Implemented

### ✅ Visual & Design Updates
- **Halloween Color Palette**: Added Pumpkin Orange (#FF7B00) and Off-Black (#111111) as seasonal accent colors
- **Hero Banner Overlay**: Subtle orange glow and mist effects layered on top of the hero section
- **Spider Web SVG**: Tasteful spider web icon in the header corner
- **Pumpkin Details**: Small pumpkin emojis and icons throughout the interface

### ✅ Text & Calls-to-Action
- **Hero Line**: "No Tricks, Just Safe Rides – Aylestone Taxis Halloween Special 🎃"
- **Top Banner**: "🎃 Halloween Weekend – No Surge Prices, Book Now 🎃"
- **Enhanced CTA Button**: Glow and flicker effects using CSS keyframes
- **Halloween-themed CTAs**: Updated button text and styling throughout the site

### ✅ Technical Implementation
- **Lightweight CSS**: All effects implemented with CSS only (no heavy JavaScript)
- **Toggleable Theme**: Managed via React context and CSS classes
- **Optimized Assets**: All new assets under 150KB, SVG format preferred
- **SEO Preserved**: All schema, SEO tags, and existing links maintained

### ✅ Mobile & Accessibility
- **Responsive Design**: All elements scale smoothly on mobile devices
- **High Contrast Support**: Enhanced colors for high contrast mode
- **Reduced Motion**: Respects `prefers-reduced-motion` setting
- **Touch-friendly**: Maintained proper tap spacing for all buttons

### ✅ Auto-Disable Feature
- **Automatic Activation**: Theme activates during October
- **Auto-Disable**: Automatically removes theme after November 1st
- **Manual Toggle**: Testing toggle available for development

## File Structure

```
├── styles/
│   └── halloween.css              # Halloween theme styles
├── components/
│   ├── HalloweenThemeProvider.tsx # Theme context and auto-disable logic
│   ├── HalloweenTopBanner.tsx     # Halloween weekend banner
│   ├── HalloweenFloatingElements.tsx # Floating bats and leaves
│   ├── HalloweenSpiderWeb.tsx     # Spider web SVG component
│   └── HalloweenToggle.tsx        # Manual toggle for testing
├── public/
│   └── favicon-halloween.svg      # Halloween favicon
└── app/
    ├── layout.tsx                 # Updated with Halloween components
    └── page.tsx                   # Updated with Halloween theming
```

## Key Components

### HalloweenThemeProvider
- Manages theme state and auto-disable logic
- Handles favicon switching
- Provides context for all Halloween components

### Halloween CSS Classes
- `.halloween-theme` - Main theme container class
- `.halloween-cta-glow` - Glowing CTA button effect
- `.halloween-floating-bat` - Floating bat animation
- `.halloween-floating-leaf` - Floating leaf animation
- `.halloween-hero-overlay` - Hero section overlay
- `.halloween-mist` - Mist effect overlay

## Usage

The Halloween theme automatically activates during October and deactivates after November 1st. For testing purposes, a toggle button is available in the bottom-left corner.

## Browser Support
- Modern browsers with CSS Grid and Flexbox support
- Graceful degradation for older browsers
- SVG support required for icons and favicon

## Performance
- No impact on Core Web Vitals
- All animations use CSS transforms for optimal performance
- Lazy loading of Halloween-specific assets
- Minimal JavaScript overhead

## Maintenance
- Theme automatically disables after November 1st
- No manual intervention required
- Easy to extend with additional Halloween features
- Clean separation from main site functionality


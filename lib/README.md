# Data Structure Documentation

This document explains how to use the centralized data structure for the Aylestone Kings website.

## Overview

All website content is now centralized in `lib/data.ts` to ensure consistency across pages and make future updates easier.

## How to Use

### 1. Import the Data

```tsx
import { siteData } from "@/lib/data"
```

### 2. Access Data Properties

```tsx
// Company information
siteData.company.name                    // "Aylestone Kings"
siteData.company.tagline                 // "Moving Aylestone forward"
siteData.company.founded                 // "2009"
siteData.company.founders                // "Colin and Audrey Shanks"

// Statistics
siteData.company.yearsExperience         // "15+"
siteData.company.passengersServed        // "10,608,000"
siteData.company.satisfactionRating      // "99.7%"

// Images
siteData.images.heroTaxi                 // "/white-modern-taxi-side.png"
siteData.images.companyHistory           // "/company-history.jpg"

// Page-specific content
siteData.homepage.hero.title             // "Moving Aylestone forward"
siteData.fleetPage.hero.title            // "Premium comfort, every ride, every time"
siteData.companyPage.about.subtitle      // "Founded in 2009 by Colin and Audrey Shanks..."
```

## Data Structure

### Company Information
- Basic company details (name, tagline, contact info)
- Company history and achievements
- Statistics and metrics
- Licenses and certifications

### Navigation
- Main menu items
- About dropdown items

### Images
- Organized by page/section
- Consistent naming convention
- All image paths centralized

### Page Content
- **Homepage**: Hero, stats, about, services, app benefits
- **Fleet**: Vehicle descriptions, features, images
- **Company**: About, history, trust metrics
- **Drive**: Driver benefits and information

### Footer
- Quick links
- Services
- Legal pages

## Benefits of This Approach

1. **Consistency**: All pages use the same data source
2. **Maintainability**: Update content in one place
3. **Scalability**: Easy to add new pages and content
4. **Localization**: Simple to add multiple languages
5. **Testing**: Centralized data makes testing easier

## Adding New Content

1. Add new properties to the appropriate section in `data.ts`
2. Use the data in your components
3. Update this documentation

## Example Usage

```tsx
// Before (hardcoded)
<h1>Moving Aylestone forward</h1>
<p>Founded in 2009 by Colin and Audrey Shanks...</p>

// After (using centralized data)
<h1>{siteData.homepage.hero.title}</h1>
<p>{siteData.company.description}</p>
```

## Future Enhancements

- Add TypeScript interfaces for better type safety
- Implement content management system integration
- Add validation for required fields
- Support for dynamic content updates

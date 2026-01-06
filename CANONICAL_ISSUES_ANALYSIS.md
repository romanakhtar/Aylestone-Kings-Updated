# Canonical Issues Analysis & Recommendations

## Executive Summary

All 78 URLs listed have the same fundamental canonical issues:

### Critical Issues Found:
1. **URL Format Mismatch**: Internal links use `/taxis-in-{slug}` format while canonical tags point to `/taxis-in/{slug}`
2. **Relative Canonical URLs**: Canonical tags are relative instead of absolute
3. **No 301 Redirects**: Rewrite exists but no redirect, so both URL formats are accessible
4. **Thin/Duplicate Content**: Most pages have identical template content with only area name changes
5. **Inconsistent Internal Linking**: Links point to non-canonical URL format

---

## Root Cause Analysis

### Issue 1: URL Format Conflict (CRITICAL)
- **Internal links format**: `/taxis-in-oadby` (hyphen, no slash)
- **Canonical format**: `/taxis-in/oadby` (slash)
- **Sitemap format**: `/taxis-in/oadby` (slash)
- **Current behavior**: Rewrite from hyphen to slash (not a redirect)

**Why Google ignores the canonical:**
- Google crawls internal links and finds `/taxis-in-oadby`
- The page serves via rewrite but canonical says `/taxis-in/oadby`
- Both URLs are accessible (200 status), so Google sees them as separate pages
- Internal link signals point to the hyphen format, undermining the canonical

### Issue 2: Relative Canonical URLs
- **Current**: `canonical: '/taxis-in/${slug}'`
- **Should be**: `canonical: 'https://aylestone-taxis.co.uk/taxis-in/${slug}'`

### Issue 3: Thin/Duplicate Content
- Most pages use identical template with only area name replacement
- Only 1 area (Oadby) has unique landmarks content
- Google may see pages as duplicate/thin, causing canonical issues

---

## Per-URL Analysis & Recommendations

### Category 1: Standard Area Pages (No unique content)
These pages have identical content except for area name:

1. **https://aylestone-taxis.co.uk/taxis-in-oadby**
   - **Issues**: URL mismatch, relative canonical, thin content
   - **Recommendation**: 
     - Update canonical to absolute: `https://aylestone-taxis.co.uk/taxis-in/oadby`
     - Add 301 redirect from `/taxis-in-oadby` → `/taxis-in/oadby`
     - Update all internal links to use `/taxis-in/oadby`
     - Add unique content (local landmarks, specific routes, local context)

2. **https://aylestone-taxis.co.uk/taxis-in-westcotes**
   - **Issues**: Same as above
   - **Recommendation**: Same fixes as Oadby

3. **https://aylestone-taxis.co.uk/taxis-in-braunstone-town**
   - **Issues**: Same as above
   - **Note**: "Braunstone" and "Braunstone Town" are separate pages - ensure clear distinction
   - **Recommendation**: Same fixes + add unique content differentiating from Braunstone

4. **https://aylestone-taxis.co.uk/taxis-in-wigston-fields**
   - **Issues**: Same as above
   - **Note**: Appears in multiple footer groups (potential duplicate internal linking)
   - **Recommendation**: Same fixes + consolidate footer links

5. **https://aylestone-taxis.co.uk/taxis-in-melton-mowbray**
   - **Issues**: Same as above
   - **Recommendation**: Same fixes

6. **https://aylestone-taxis.co.uk/taxis-in-leicester-city-centre**
   - **Issues**: Same as above
   - **Note**: High-value page - ensure priority treatment
   - **Recommendation**: Same fixes + add extensive unique content (specific locations, landmarks, popular routes)

7. **https://aylestone-taxis.co.uk/taxis-in-whetstone**
   - **Issues**: Same as above
   - **Recommendation**: Same fixes

8. **https://aylestone-taxis.co.uk/taxis-in-thurmaston**
   - **Issues**: Same as above
   - **Note**: Appears in multiple footer groups
   - **Recommendation**: Same fixes + consolidate footer links

9. **https://aylestone-taxis.co.uk/taxis-in-thurnby-lodge**
   - **Issues**: Same as above
   - **Recommendation**: Same fixes

10. **https://aylestone-taxis.co.uk/taxis-in-syston**
    - **Issues**: Same as above
    - **Note**: Appears in multiple footer groups
    - **Recommendation**: Same fixes + consolidate footer links

11. **https://aylestone-taxis.co.uk/taxis-in-broughton-astley**
    - **Issues**: Same as above
    - **Recommendation**: Same fixes

12. **https://aylestone-taxis.co.uk/taxis-in-eyres-monsell**
    - **Issues**: Same as above
    - **Recommendation**: Same fixes

13. **https://aylestone-taxis.co.uk/taxis-in-blaby**
    - **Issues**: Same as above
    - **Recommendation**: Same fixes

14. **https://aylestone-taxis.co.uk/taxis-in-hinckley**
    - **Issues**: Same as above
    - **Recommendation**: Same fixes

15. **https://aylestone-taxis.co.uk/taxis-in-university-of-leicester**
    - **Issues**: Same as above + destination page (different title format)
    - **Recommendation**: Same fixes + ensure destination-specific content (pickup points, term times, event parking)

16. **https://aylestone-taxis.co.uk/taxis-in-st-margarets-bus-station**
    - **Issues**: Same as above + destination page
    - **Recommendation**: Same fixes + add bus station specific content (routes, timing, connections)

17. **https://aylestone-taxis.co.uk/taxis-in-cosby**
    - **Issues**: Same as above
    - **Recommendation**: Same fixes

18. **https://aylestone-taxis.co.uk/taxis-in-braunstone**
    - **Issues**: Same as above
    - **Note**: Separate from "Braunstone Town" - ensure differentiation
    - **Recommendation**: Same fixes + add unique content distinguishing from Braunstone Town

19. **https://aylestone-taxis.co.uk/taxis-in-leicester-general-hospital**
    - **Issues**: Same as above + destination page
    - **Recommendation**: Same fixes + add hospital-specific content (visiting hours, drop-off points, accessibility)

20. **https://aylestone-taxis.co.uk/taxis-in-aldi-aylestone-road**
    - **Issues**: Same as above + destination page
    - **Recommendation**: Same fixes + add store-specific content (opening hours, parking, nearby locations)

21. **https://aylestone-taxis.co.uk/taxis-in-lidl-beaumont-leys**
    - **Issues**: Same as above + destination page
    - **Recommendation**: Same fixes + add store-specific content

22. **https://aylestone-taxis.co.uk/taxis-in-humberstone**
    - **Issues**: Same as above
    - **Recommendation**: Same fixes

23. **https://aylestone-taxis.co.uk/taxis-in-belgrave**
    - **Issues**: Same as above
    - **Recommendation**: Same fixes

24. **https://aylestone-taxis.co.uk/taxis-in-spire-leicester-hospital**
    - **Issues**: Same as above + destination page
    - **Recommendation**: Same fixes + add hospital-specific content

25. **https://aylestone-taxis.co.uk/taxis-in-leicester-college**
    - **Issues**: Same as above + destination page
    - **Recommendation**: Same fixes + add college-specific content (campuses, term times)

26. **https://aylestone-taxis.co.uk/taxis-in-asda-fosse-park**
    - **Issues**: Same as above + destination page
    - **Note**: "Fosse Park" also exists as separate page - ensure differentiation
    - **Recommendation**: Same fixes + differentiate from generic Fosse Park page

27. **https://aylestone-taxis.co.uk/taxis-in-rushey-mead**
    - **Issues**: Same as above
    - **Recommendation**: Same fixes

28. **https://aylestone-taxis.co.uk/taxis-in-waitrose-oadby**
    - **Issues**: Same as above + destination page
    - **Recommendation**: Same fixes + add store-specific content

29. **https://aylestone-taxis.co.uk/taxis-in-jame-mosque-leicester**
    - **Issues**: Same as above + destination page
    - **Recommendation**: Same fixes + add mosque-specific content (prayer times, events)

30. **https://aylestone-taxis.co.uk/taxis-in-jewry-wall-museum**
    - **Issues**: Same as above + destination page (priority area)
    - **Recommendation**: Same fixes + add museum-specific content (exhibitions, opening hours)

31. **https://aylestone-taxis.co.uk/taxis-in-aylestone**
    - **Issues**: Same as above
    - **Note**: Home area - high priority
    - **Recommendation**: Same fixes + extensive unique content

32. **https://aylestone-taxis.co.uk/taxis-in-south-wigston-station**
    - **Issues**: Same as above + destination page
    - **Note**: "South Wigston" also exists as area page
    - **Recommendation**: Same fixes + differentiate from area page

33. **https://aylestone-taxis.co.uk/taxis-in-nuffield-health-leicester-hospital**
    - **Issues**: Same as above + destination page
    - **Recommendation**: Same fixes + add hospital-specific content

34. **https://aylestone-taxis.co.uk/taxis-in-kibworth**
    - **Issues**: Same as above
    - **Recommendation**: Same fixes

35. **https://aylestone-taxis.co.uk/taxis-in-haymarket-shopping-centre**
    - **Issues**: Same as above + destination page (priority area)
    - **Recommendation**: Same fixes + add shopping centre specific content

36. **https://aylestone-taxis.co.uk/taxis-in-curve-theatre**
    - **Issues**: Same as above + destination page (high priority)
    - **Recommendation**: Same fixes + add theatre-specific content (shows, events, late-night pickups)

37. **https://aylestone-taxis.co.uk/taxis-in-leicester-railway-station**
    - **Issues**: Same as above + destination page
    - **Recommendation**: Same fixes + add station-specific content (platforms, connections, rush hours)

38. **https://aylestone-taxis.co.uk/taxis-in-glenfield-hospital**
    - **Issues**: Same as above + destination page
    - **Recommendation**: Same fixes + add hospital-specific content

39. **https://aylestone-taxis.co.uk/taxis-in-sainsburys-grove-triangle**
    - **Issues**: Same as above + destination page
    - **Recommendation**: Same fixes + add store-specific content

40. **https://aylestone-taxis.co.uk/taxis-in-tesco-narborough-road**
    - **Issues**: Same as above + destination page
    - **Recommendation**: Same fixes + add store-specific content

41. **https://aylestone-taxis.co.uk/taxis-in-wigston**
    - **Issues**: Same as above
    - **Note**: Appears in multiple footer groups; "South Wigston" and "Wigston Fields" are separate
    - **Recommendation**: Same fixes + consolidate footer links + differentiate from related pages

42. **https://aylestone-taxis.co.uk/taxis-in-countesthorpe**
    - **Issues**: Same as above
    - **Recommendation**: Same fixes

43. **https://aylestone-taxis.co.uk/taxis-in-evington**
    - **Issues**: Same as above
    - **Recommendation**: Same fixes

44. **https://aylestone-taxis.co.uk/taxis-in-enderby**
    - **Issues**: Same as above
    - **Recommendation**: Same fixes

45. **https://aylestone-taxis.co.uk/taxis-in-coalville**
    - **Issues**: Same as above
    - **Recommendation**: Same fixes

46. **https://aylestone-taxis.co.uk/taxis-in-m-and-s-foodhall-city-centre**
    - **Issues**: Same as above + destination page
    - **Recommendation**: Same fixes + add store-specific content

47. **https://aylestone-taxis.co.uk/taxis-in-leicester-cathedral**
    - **Issues**: Same as above + destination page (priority area)
    - **Recommendation**: Same fixes + add cathedral-specific content (services, events, tourist info)

48. **https://aylestone-taxis.co.uk/taxis-in-national-space-centre**
    - **Issues**: Same as above + destination page (high priority)
    - **Recommendation**: Same fixes + add extensive unique content (exhibitions, opening hours, family visits)

49. **https://aylestone-taxis.co.uk/taxis-in-farmfoods-st-matthews**
    - **Issues**: Same as above + destination page
    - **Recommendation**: Same fixes + add store-specific content

50. **https://aylestone-taxis.co.uk/taxis-in-south-wigston**
    - **Issues**: Same as above
    - **Note**: "South Wigston Station" is separate page
    - **Recommendation**: Same fixes + differentiate from station page

51. **https://aylestone-taxis.co.uk/taxis-in-leicester-racecourse**
    - **Issues**: Same as above + destination page
    - **Recommendation**: Same fixes + add racecourse-specific content (race days, events)

52. **https://aylestone-taxis.co.uk/taxis-in-birstall**
    - **Issues**: Same as above
    - **Note**: Appears in multiple footer groups
    - **Recommendation**: Same fixes + consolidate footer links

53. **https://aylestone-taxis.co.uk/taxis-in-morrisons-freemens-common**
    - **Issues**: Same as above + destination page
    - **Recommendation**: Same fixes + add store-specific content

54. **https://aylestone-taxis.co.uk/taxis-in-highcross-leicester**
    - **Issues**: Same as above + destination page (high priority)
    - **Recommendation**: Same fixes + add shopping centre specific content (stores, opening hours, events)

55. **https://aylestone-taxis.co.uk/taxis-in-groby**
    - **Issues**: Same as above
    - **Note**: Appears in multiple footer groups
    - **Recommendation**: Same fixes + consolidate footer links

56. **https://aylestone-taxis.co.uk/taxis-in-de-montfort-university**
    - **Issues**: Same as above + destination page
    - **Recommendation**: Same fixes + add university-specific content (campuses, term times, student travel)

57. **https://aylestone-taxis.co.uk/taxis-in-leicester-market**
    - **Issues**: Same as above + destination page
    - **Recommendation**: Same fixes + add market-specific content (market days, hours, special events)

58. **https://aylestone-taxis.co.uk/taxis-in-iceland-city-centre**
    - **Issues**: Same as above + destination page
    - **Recommendation**: Same fixes + add store-specific content

59. **https://aylestone-taxis.co.uk/taxis-in-glen-parva**
    - **Issues**: Same as above
    - **Recommendation**: Same fixes

60. **https://aylestone-taxis.co.uk/taxis-in-clarendon-park**
    - **Issues**: Same as above
    - **Recommendation**: Same fixes

61. **https://aylestone-taxis.co.uk/taxis-in-market-harborough**
    - **Issues**: Same as above
    - **Recommendation**: Same fixes

62. **https://aylestone-taxis.co.uk/taxis-in-hamilton**
    - **Issues**: Same as above
    - **Recommendation**: Same fixes

63. **https://aylestone-taxis.co.uk/taxis-in-masjid-umar**
    - **Issues**: Same as above + destination page
    - **Recommendation**: Same fixes + add mosque-specific content

64. **https://aylestone-taxis.co.uk/taxis-in-welford-road-stadium**
    - **Issues**: Same as above + destination page
    - **Recommendation**: Same fixes + add stadium-specific content (match days, events)

65. **https://aylestone-taxis.co.uk/taxis-in-beaumont-leys**
    - **Issues**: Same as above
    - **Note**: "Lidl Beaumont Leys" is separate destination page
    - **Recommendation**: Same fixes + differentiate from store page

66. **https://aylestone-taxis.co.uk/taxis-in-lutterworth**
    - **Issues**: Same as above
    - **Recommendation**: Same fixes

67. **https://aylestone-taxis.co.uk/taxis-in-fosse-park**
    - **Issues**: Same as above + destination page
    - **Note**: "Asda Fosse Park" is separate page - ensure differentiation
    - **Recommendation**: Same fixes + differentiate from Asda page, add shopping park content

68. **https://aylestone-taxis.co.uk/taxis-in-shree-hindu-temple-leicester**
    - **Issues**: Same as above + destination page
    - **Recommendation**: Same fixes + add temple-specific content (events, services)

69. **https://aylestone-taxis.co.uk/taxis-in-highfields**
    - **Issues**: Same as above
    - **Recommendation**: Same fixes

70. **https://aylestone-taxis.co.uk/taxis-in-king-richard-iii-visitor-centre**
    - **Issues**: Same as above + destination page (priority area)
    - **Recommendation**: Same fixes + add visitor centre specific content (tours, exhibitions)

71. **https://aylestone-taxis.co.uk/taxis-in-stoneygate**
    - **Issues**: Same as above
    - **Recommendation**: Same fixes

72. **https://aylestone-taxis.co.uk/taxis-in-athena-city-rooms**
    - **Issues**: Same as above + destination page (priority area)
    - **Recommendation**: Same fixes + add venue-specific content (events, conferences, weddings)

73. **https://aylestone-taxis.co.uk/taxis-in-grove-park**
    - **Issues**: Same as above + destination page
    - **Recommendation**: Same fixes + add park-specific content (events, seasonal activities)

74. **https://aylestone-taxis.co.uk/taxis-in-king-power-stadium**
    - **Issues**: Same as above + destination page
    - **Recommendation**: Same fixes + add stadium-specific content (match days, events, parking)

75. **https://aylestone-taxis.co.uk/taxis-in-narborough**
    - **Issues**: Same as above
    - **Recommendation**: Same fixes

76. **https://aylestone-taxis.co.uk/taxis-in-leicester-royal-infirmary**
    - **Issues**: Same as above + destination page
    - **Recommendation**: Same fixes + add hospital-specific content (departments, visiting, accessibility)

77. **https://aylestone-taxis.co.uk/taxis-in-guru-nanak-gurdwara-leicester**
    - **Issues**: Same as above + destination page
    - **Recommendation**: Same fixes + add gurdwara-specific content (services, events)

78. **https://aylestone-taxis.co.uk/taxis-in-de-montfort-hall**
    - **Issues**: Same as above + destination page (priority area)
    - **Recommendation**: Same fixes + add hall-specific content (concerts, graduations, events)

---

## Global Fixes (Apply to All URLs)

### Priority 1: Fix Canonical & URL Structure

1. **Convert rewrite to 301 redirect**:
   ```javascript
   // In next.config.mjs, replace rewrite with redirect:
   async redirects() {
     return [
       { source: '/index.html', destination: '/', permanent: true },
       { source: '/services.html', destination: '/travel', permanent: true },
       { source: '/faqs.html', destination: '/pricing', permanent: true },
       { source: '/corporate.html', destination: '/company', permanent: true },
       { source: '/contact.html', destination: '/contact', permanent: true },
       // Add redirect for all taxis-in pages
       { 
         source: '/taxis-in-:slug*', 
         destination: '/taxis-in/:slug*', 
         permanent: true 
       },
     ];
   }
   ```

2. **Update canonical to absolute URLs**:
   ```typescript
   // In app/(areas)/taxis-in/[slug]/page.tsx
   alternates: {
     canonical: `https://aylestone-taxis.co.uk/taxis-in/${slug}`,
   },
   ```

3. **Update all internal links** in `lib/data.ts`:
   - Change all `/taxis-in-{slug}` to `/taxis-in/{slug}`

### Priority 2: Content Enhancement

1. **Add unique content for each area**:
   - Local landmarks
   - Specific popular routes
   - Local context (nearby areas, notable features)
   - Estimated travel times to key destinations

2. **Differentiate similar pages**:
   - Braunstone vs Braunstone Town
   - Wigston vs South Wigston vs Wigston Fields
   - Fosse Park vs Asda Fosse Park

3. **Consolidate duplicate footer links**:
   - Remove duplicate entries from multiple footer groups
   - Ensure each area appears only once in footer navigation

### Priority 3: Internal Linking

1. **Update all internal links** to use canonical format
2. **Ensure consistent linking** - all links should point to `/taxis-in/{slug}`
3. **Update navigation components** to use canonical URLs

---

## Implementation Priority

### Phase 1 (Immediate - All URLs)
- ✅ Fix canonical URLs (absolute)
- ✅ Add 301 redirects
- ✅ Update internal links

### Phase 2 (Week 1 - High Priority Pages)
- Add unique content to:
  - National Space Centre
  - Highcross Leicester
  - Curve Theatre
  - Leicester City Centre
  - Aylestone
  - University pages
  - Major hospitals

### Phase 3 (Week 2-3 - Remaining Pages)
- Add unique content to remaining pages
- Consolidate footer links
- Differentiate similar pages

---

## Expected Outcomes

After implementing these fixes:
1. Google will properly follow canonical tags
2. All link equity will consolidate to canonical URLs
3. No duplicate content penalties
4. Improved rankings for properly canonicalized pages
5. Better user experience with consistent URLs

---

## Monitoring

After implementation, monitor:
1. Google Search Console for canonical status
2. Index coverage reports
3. Internal link reports
4. Page rankings for target keywords


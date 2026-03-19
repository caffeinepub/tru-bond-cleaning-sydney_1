# Tru Bond Cleaning Sydney

## Current State
Site has homepage, 5 service pages, About, Contact, Header, Footer, WhatsAppButton. No suburb pages exist. Service pages exist but need more content and images. App.tsx routes only to existing pages.

## Requested Changes (Diff)

### Add
- 15 suburb pages: Bondi, Parramatta, Chatswood, Manly, Hurstville, Newtown, Randwick, Cronulla, Strathfield, Penrith, Castle Hill, Liverpool, Kogarah, Burwood, Pymble
- Each suburb page: ~1000 words, E-E-A-T content, unique branded image with alt text, meta title + description
- New branded images for each suburb (already generated)
- Internal links from homepage to all suburb pages

### Modify
- App.tsx: add suburb page types and routes
- Home.tsx: add suburb links section

### Remove
- Nothing removed

## Implementation Plan
1. Write all 15 suburb page components
2. Update App.tsx with new page types and routes
3. Update Home.tsx to include suburb links section

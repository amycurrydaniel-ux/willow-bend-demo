# Willow Bend Counseling website (demo)

A five-page static website. No build step, no database: every page is a plain HTML file.

## What's here

| File | What it is |
|---|---|
| `index.html` | Home page |
| `about.html` | About Dana, credentials, license |
| `services.html` | Session types and lengths |
| `insurance-fees.html` | Insurance plans, self-pay rates, Good Faith Estimate notice |
| `contact.html` | Consultation request form and office details |
| `404.html` | Shown when someone visits a page that doesn't exist |
| `styles.css` | All colors, fonts, and layout, shared by every page |
| `contact.js` | Contact form behavior (currently demo-only) |
| `favicon.svg` | Browser tab icon |
| `sitemap.xml`, `robots.txt` | Help search engines find the pages |

## Hosting

Connect this repository to Netlify or Cloudflare Pages. No build command is needed; the publish folder is the repository root. Every change saved to this repository updates the live site automatically.

## Before launch (placeholders to replace)

- Therapist name, license number, address, phone, and email (marked as samples on the site)
- `www.example.com` in `sitemap.xml` and `robots.txt` with the real domain
- Contact form: connect to the practice's HIPAA-appropriate contact or booking form (for example, from its practice-management system), or a form service that will sign a BAA
- Add a real headshot to the About page

## Making changes

Ask Claude with this repository attached, for example: "Update the self-pay individual rate to $160 and add Humana to the insurance list." Claude edits the files and saves the change here; the host republishes the site.

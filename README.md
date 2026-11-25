# Linh Nguyen — Beauty / Make-up Artist Portfolio

A static portfolio website for **Linh Nguyen, freelance make-up artist,
North Adelaide SA**. Built 25 Nov 2026. No CMS, no database, no backend, no
environment variables, so it deploys on Vercel with zero config.

- Live: https://linh-makeup-portfolio.vercel.app/
- Repo: https://github.com/davidphamle/linh-makeup-portfolio
- Tech: Next.js 14 (App Router, TypeScript) + Tailwind CSS + Three.js, `output: 'export'`
- Contact: nguyenlinhlinh9494@gmail.com · 0424785266
- Languages: English default, full Tiếng Việt toggle (EN/VI button in header)
- Sections (single page): Hero, Selected work (gallery), Services, About, Contact / Enquire
- Enquiry form is mailto-only: it opens the visitor's email app addressed
  to Linh. Nothing is sent to or stored on any server.
- SEO: title/description/Open Graph in `src/app/layout.tsx`, plus
  `sitemap.xml` and `robots.txt` pointing at the real Vercel domain
  (https://linh-makeup-portfolio.vercel.app/).

## v2 — what changed (25 Nov 2026)

1. **Less text, more visual.** Visible copy cut by about three quarters
   per language (English copy ~125 words, was ~550 in v1). Hero is a name,
   one line and two buttons. About is two short sentences. Services are
   image cards with one line each. Experience is 3 stat chips plus a
   4-entry timeline strip (year + a few words).
2. **Three.js hero animation** (`src/components/HeroCanvas.tsx`, `three`
   0.187.0, client-only via `dynamic(..., { ssr: false })`). ~320 soft
   floating shimmer particles in blush, gold and cream, plus 3 large
   translucent blobs, slow drift and gentle mouse parallax. Respects
   `prefers-reduced-motion` (one static frame, no animation loop) and
   falls back to the CSS gradient if WebGL is unavailable. No 3D models,
   no external CDN scripts. Gallery images have scroll-reveal and a
   gentle hover zoom.
3. **Real photos, no placeholders.** All 15 gallery slots + the hero are
   real photos from Linh's own Framer site (see "Image sources" below).
   Gallery is a masonry grid with category filters (All / Bridal / Stage
   / Film & TV / Workshops) and a lightbox with prev/next and keyboard
   navigation. Images are local, lazy-loaded, max 1200px wide, JPEG q80.
4. **Sitemap fixed.** `src/app/sitemap.ts` and `src/app/robots.ts` now
   use https://linh-makeup-portfolio.vercel.app/ (was the placeholder
   https://linh-nguyen.example.com/). Open Graph image is the hero photo.
5. **Contact updated.** Phone 0424785266 added (confirmed from her CV,
   25 Nov 2026). Location is North Adelaide, SA. Availability is one
   line: not available Christmas / New Year, travel 5 Dec 2026 – 6 Jan 2027.

## Image sources (all Linh's own work, from her Framer site)

Source: https://dieplammakeup.framer.website/ ("Diep Lam Makeup, by Linh
Nguyen Thi Khanh", Selected work 2016–2022). 44 unique JPGs were found
across the 5 Framer pages; 16 were used (15 gallery + hero), chosen for
variety and quality after viewing them. Each was downscaled to max
1200px, JPEG quality 80. Total: 1.97 MB.

| File | Framer source image | Category |
|---|---|---|
| hero.jpg | IRmnkUyXp7YKnpsyh8lR5ANPgbc.jpeg (home) | Bridal portrait |
| bridal-01.jpg | Be1CS1ZDboQn56py3lzXNZ91GY.jpeg (bridal-event) | Bridal |
| bridal-02.jpg | IKBOc1ZnllnixIh1uVFQVphbU4.jpeg (bridal-event) | Bridal |
| bridal-03.jpg | m9BvRYmHklF88VDT22HvZeheU.jpeg (bridal-event) | Bridal |
| bridal-04.jpg | vPo4Uj6QHGxO4sj7gP1RFnxsc.jpg (bridal-event) | Bridal |
| bridal-05.jpg | 8r850XUWMuDsKGKfefU1oFrcUWg.jpeg (bridal-event) | Bridal |
| stage-01.jpg | zuMlfApg0amJBh9TmKRKE4VYkhg.jpg (stage-play) | Stage |
| stage-02.jpg | Lx9g9LYuyB7vNdKGPunLZSg8xns.jpg (stage-play) | Stage |
| stage-03.jpg | b4Q536XM9DihH8ByyBE8hLBTfYk.jpg (stage-play) | Stage |
| film-01.jpg | 3nhdmxgHq4KFeMZcWS8xcQ7VWk.jpg (film-tv) | Film & TV |
| film-02.jpg | CTQxRGadlw0G0PrKO2ZzoYae0.jpg (film-tv) | Film & TV |
| film-03.jpg | rehBvRZRi1ZpNatKKJF7mCpmsQ.jpg (film-tv) | Film & TV |
| workshop-01.jpg | 0n6cVEgaEWtuie8R7PPSc9g.jpg (workshops) | Workshop |
| workshop-02.jpg | YgdPjEVigFuGhv88SmWTa4Ofil4.jpg (workshops) | Workshop |
| workshop-03.jpg | NENe6QbiXZQcKaXrjy0aPjJLCGs.jpg (workshops) | Workshop |
| workshop-04.jpg | 2VGzTG470xr2M8M5sVW1D1sveDU.jpg (workshops) | Workshop |

Full URLs are https://framerusercontent.com/images/<id above>.
Not used: the remaining 28 JPGs (duplicates across pages, near-identical
workshop classroom shots, behind-the-scenes and food/table shots, and
smaller 640px images) — they were valid images, just not needed for a
15-photo gallery. Skipped entirely: PNG/SVG logos and icons
(BiWtsTv6SIcVCxV8Ax5rYMOyjoY.png, UY2N0ji9QLBtVmvG7J0LDCSWPtE.png,
B7eIGY76GQrFg926Dlcl4eaCI.png, 7heCflXRLb0KwEKUNSvh9ZpS7Ho.png,
MeaWeHXiStbGTOmFc3gXrVcFI.png, 0HkgA1sKIpfw5wGNnhJ3C5XcDck.png,
mi1Qfz5LwN0AAie6P3CGglUCDMo.png, AvdiQbKGthpUlRnmOmH60vLA.png,
6tTbkXggWgQCAJ4DO2QEdXXmgM.svg, 11KSGbIZoRSg4pjdnUoif6MKHI.svg),
the stage GIF (VnBqBAl8l9TzKCtonciplWpc.gif), and 2 files that were
PNG data despite a .jpg extension (stage zuMlfApg0amJBh9TmKRKE4VYkhg.jpg
and workshop LWZLpYMUxpzrXwxIoIjUKuQ6ySY.jpg / NchGzXqEN7yEu4hQza9cUp7A40.jpg
— the stage one was used and re-encoded as JPEG; the two workshop ones
were not picked).

## v1 audit findings (kept for reference)

Linh had no Vercel portfolio before v1; her only materials were a CV
draft and two draft job applications. v1 was built from scratch using
`jyjy4work/Soobeen-choi-makeup-artist` only for structure (no content
or Sanity code copied). v1 used gradient placeholders because no real
photos had been supplied yet. That changed in v2: her Framer site
(dieplammakeup.framer.website, found on her past CV) already held her
real work, and those photos are now the gallery.

## Still missing (nothing invented)

No prices (all services say "Price on enquiry"), no testimonials, no
client names, no venues or dates per photo (photos are labelled by
category only). CV is still a draft; earliest start date still to confirm.

## Run locally / deploy

```bash
npm install
npm run build   # static export lands in ./out
npm run dev     # local preview at http://localhost:3000
```

Deploy: push to GitHub (repo above) and Vercel rebuilds from main.
No build settings to change, no environment variables.

# Adding real portfolio photos

The gallery on this site currently uses CSS gradient placeholders, NOT
real photos. Do not present stock photos of strangers as Linh's work.

To add a real photo:
1. Save the photo as a JPG/WebP under 1 MB, e.g. `public/portfolio/bridal-01.jpg`.
2. In `src/lib/content.ts`, add an `image` field to the matching item in
   `portfolioItems` (or add a new item) and render it in `src/app/page.tsx`.
   Until then, the placeholder stays visible and labelled as a placeholder.
3. Only use photos Linh owns or has permission to publish, with the
   client's consent where the photo shows a real client.
4. Rebuild (`npm run build`) and redeploy.

Suggested filenames: bridal-01.jpg, wedding-guest-01.jpg,
event-party-01.jpg, theatre-01.jpg, natural-01.jpg, photoshoot-01.jpg,
formal-01.jpg, cultural-01.jpg

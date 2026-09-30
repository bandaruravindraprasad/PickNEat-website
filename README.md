# Pick'N'Eat Website

This is a plain HTML/CSS/JavaScript Cloudflare Pages site.

## Files
- `index.html` — page, catalogue data, filtering/search and image mapping
- `styles.css` — all visual styling
- `README.md` — notes

## Updating the site
Replace these three files in the GitHub repository and commit to `main`.
Cloudflare Pages is already connected to the repository, so the commit should trigger a new deployment automatically.

## Important image note
The supplied invoice photos contain many products. Only images that could be matched with reasonable confidence are linked here. The site deliberately does NOT reuse the same picture for different products. Unverified products show a placeholder instead.

For a final production catalogue with an exact photo for every SKU, the safest workflow is to add verified product image URLs (preferably from Amul or authorized distributor/e-commerce listings) to the `image` field in `index.html`.

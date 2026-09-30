# Pick'N'Eat website

Customer-facing static website for Pick'N'Eat, using the supplied Pick'N'Eat logo and product/MRP information transcribed from the September 2026 stock invoices.

## Files
- `index.html` — complete website and product catalogue
- `styles.css` — responsive design
- `logo.jpg` — supplied Pick'N'Eat logo/banner

## Deploy to Cloudflare Pages via GitHub
1. Replace the contents of the GitHub repository with these files.
2. Commit the changes to the `main` branch.
3. Cloudflare Pages should automatically create a new deployment if automatic deployments are enabled.
4. Open the production domain: `https://pickneat.ravindra.cloud`

## Important
- Product MRP values are taken from the supplied invoices and are presented as customer-facing MRP. They are not distributor rates.
- The Google Maps link is included as a live external listing for directions, reviews and current shop photos.
- Google Maps customer-uploaded photos are not copied automatically into a static GitHub/Cloudflare website. The site therefore links customers to the live listing instead of falsely presenting unrelated photos as Pick'N'Eat photos.
- Several product images are loaded from publicly available retail/product image URLs. If an external image is unavailable, the card automatically falls back to a branded product-category visual rather than showing a broken image.
- Before using product images commercially, confirm that you have permission to use the relevant product imagery.

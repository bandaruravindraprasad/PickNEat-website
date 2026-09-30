# Pick'N'Eat Website

Static website for Pick'N'Eat (Amul Ice Creams), Bandlaguda, Telangana.

## Included
- Full homepage/hero section
- Shop information and Google Maps link
- Gallery section with a direct link to the Pick'N'Eat Google Maps photo listing
- Searchable/filterable product catalogue
- Product names and MRP based on the invoice photos supplied for this project
- Responsive mobile design
- No framework or paid dependency

## Important
The Google Maps short link supplied for the project resolves to the Pick N Eat (Amul Icecreams) listing. Google user-uploaded listing photos are not automatically downloadable into a static GitHub/Cloudflare Pages site without a Google Maps/Places API connection. The site therefore links visitors to the live Google Maps photo listing instead of misrepresenting unrelated Amul-parlour photographs as Pick'N'Eat photos.

Where an exact product-pack image could be matched with reasonable confidence, the catalogue uses it. Where it could not be verified, the card deliberately shows an image placeholder rather than a wrong product image.

## Deploy
Upload `index.html`, `styles.css`, and `README.md` to the GitHub repository connected to Cloudflare Pages. Commit to the main branch and let Cloudflare Pages deploy automatically.

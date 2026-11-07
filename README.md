# Doxlio (single-file static site)
No build step. Upload everything in this folder to the root of your repo `Digitaldevelopstudio/Doxlio-website` (branch `main`).
GitHub: Settings -> Pages -> Source: **Deploy from a branch** -> `main` / `/ (root)`. Live at https://digitaldevelopstudio.github.io/Doxlio-website/
Delete any old `.github/workflows` file in the repo so only one publishing method exists.
`index.html` is the whole app; `<tool>/index.html` are copies with their own title/description for search engines.
Libraries load from CDNs on demand (jsPDF, pdf-lib, Tesseract.js, OpenCV.js). The site needs internet for them.
No backend: AI tools are not included.

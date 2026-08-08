/**
 * Next.js config — static export for GitHub Pages (project page).
 *
 * The site is served from https://box-the-third.github.io/msw/, so in
 * production every asset/route must be prefixed with `/msw`. In local dev we
 * drop the prefix so the preview runs cleanly at http://localhost:3000/.
 */
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/msw" : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // emit a fully static site into ./out
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true, // GitHub Pages serves /path/ -> /path/index.html
  images: {
    unoptimized: true, // required: no image optimization server on Pages
  },
  // Exposed to the browser so our asset() helper can prefix image URLs
  // (plain <img src> and CSS background-image are NOT auto-prefixed by Next).
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;

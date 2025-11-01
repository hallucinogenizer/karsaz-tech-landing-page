/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static export for GitHub Pages
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // No trailingSlash needed for custom domain
  // If using GitHub Pages subdomain (username.github.io/repo), add:
  // basePath: '/repo-name',
  // trailingSlash: true,
};

export default nextConfig;

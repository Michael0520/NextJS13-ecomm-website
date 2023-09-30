/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "images.unsplash.com",
      "picsum.photos",
      "lh3.googleusercontent.com",
    ],
  },
}

export default nextConfig

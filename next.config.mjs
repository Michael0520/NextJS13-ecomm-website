import withBundleAnalyzer from "@next/bundle-analyzer"

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})

const nextConfig = {
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    return config
  },
  poweredByHeader: false,
  images: {
    domains: ["images.unsplash.com", "picsum.photos"],
  },
  // replacing Terser with SWC for minifying JavaScript
  swcMinify: true,
}

export default bundleAnalyzer(nextConfig)

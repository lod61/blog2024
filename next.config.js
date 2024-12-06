/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['your-domain.com'],
  },
  headers: async () => [
    {
      source: '/:all*(svg|jpg|png)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
  ],
  swcMinify: true,
  poweredByHeader: false,
  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': __dirname,
    }
    config.module = {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /\.m?js$/,
          type: 'javascript/auto',
          resolve: {
            fullySpecified: false,
          },
        },
      ],
    }
    if (isServer) {
      config.externals.push(
        'js-yaml',
        'micromark-core-commonmark',
        'micromark-util-chunked',
        'micromark-util-resolve-all',
        'micromark-util-sanitize-uri',
        'micromark-util-symbol',
        'micromark-util-types',
        'mdast-util-from-markdown',
        'mdast-util-to-string',
        'unist-util-stringify-position',
        'unist-util-visit',
        'unist-util-visit-parents'
      )
    }
    config.resolve.fallback = {
      ...config.resolve.fallback,
      punycode: false,
    }
    return config
  },
  output: 'standalone',
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/404',
        destination: '/_error',
        permanent: true,
      },
    ]
  }
}

module.exports = nextConfig 
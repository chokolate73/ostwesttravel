/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'qtrypzzcjebvfcihiynt.supabase.co' },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.touragent.de' }],
        destination: 'https://touragent.de/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

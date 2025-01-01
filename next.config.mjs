export default {
    async headers() {
      return [
        {
          // Match all static files (e.g., images, CSS, JS)
          source: '/_next/static/:path*',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable', // Long-term caching for static assets
            },
          ],
        },
        {
          // Match all images
          source: '/uploads/:path*',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable', // Cache uploaded images
            },
          ],
        },
        {
          // Match all dynamic content (e.g., API routes)
          source: '/api/:path*',
          headers: [
            {
              key: 'Cache-Control',
              value: 'no-store', // Prevent caching of API responses
            },
          ],
        },
        {
          // Match the home page or other dynamic pages
          source: '/',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, s-maxage=6000, stale-while-revalidate=600', // Cache for 6000 seconds at the edge
            },
          ],
        },
      ];
    },
  };
  
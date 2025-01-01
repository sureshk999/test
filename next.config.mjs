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
          }, {
            // Match all images
            source: '/',
            headers: [
              {
                key: 'Cache-Control',
                value: 'public, max-age=31536000, immutable', // Cache uploaded images
              },
            ],
          },
        
        
      ];
    },
  };
  
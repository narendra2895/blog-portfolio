// frontend/next-sitemap.config.js
module.exports = {
  siteUrl: 'https://kulkarninarendra.co.uk', // Use localhost for local testing
  generateRobotsTxt: true, // Generate robots.txt file
  sitemapSize: 7000, // Max number of URLs per sitemap file
  outDir: './public', // Directory to save the generated sitemaps
  autoLastmod: true, // Automatically add last modification timestamp
  exclude: ['/404', '/api/*'], // Exclude specific routes
  transform: async (config, path) => {
    return {
      loc: path, // URL location
      changefreq: path === '/' ? 'daily' : 'weekly', // Frequency of changes
      priority: path === '/' ? 1.0 : 0.7, // Priority of URLs
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};

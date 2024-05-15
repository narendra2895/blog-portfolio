module.exports = {
    siteUrl: 'https://kulkarninarendra.com', // Replace with your actual domain
    generateRobotsTxt: true, // Generates a robots.txt file
    sitemapSize: 7000, // Split sitemap file if more than 7000 URLs
    outDir: './public', // Destination directory for sitemap files and robots.txt
    autoLastmod: true, // Automatically append the last modified date to URLs
    exclude: ['/404', '/api/*'], // Exclude specific URLs from the sitemap
    transform: async (config, path) => {
      // You can modify the change frequency and priority based on path if needed
      return {
        loc: path, // Define the location of the URL
        changefreq: path.startsWith('/blog') ? 'daily' : 'weekly',
        priority: path.startsWith('/blog') ? 0.9 : 0.7,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      };
    },
  };
  
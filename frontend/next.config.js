/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  ...nextConfig,

   // Add the images configuration
   images: {
    domains: ['res.cloudinary.com'], // Add the Cloudinary hostname here
  },
}

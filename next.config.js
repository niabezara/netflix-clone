/** @type {import('next').NextConfig} */
const withNextIntl = require("next-intl/plugin")();
const nextConfig = {};

module.exports = nextConfig;
module.exports = withNextIntl({
  images: {
    domains: [
      "images.pexels.com",
      "occ-0-1432-1433.1.nflxso.net",
      "example.com",
    ],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    env: {
      AUTH0_SECRET: process.env.AUTH0_SECRET,
      AUTH0_BASE_URL: process.env.AUTH0_BASE_URL || 'http://zendo.cc', // Update this URL to match your app's domain
      AUTH0_ISSUER_BASE_URL: process.env.AUTH0_ISSUER_BASE_URL, // e.g., 'https://your-domain.auth0.com'
      AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
      AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
    },
  };
  


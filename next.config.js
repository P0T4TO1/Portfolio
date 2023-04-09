/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    EMAIL: process.env.EMAIL,
    PASSWORD: process.env.EMAIL_PASS,
  },
};

module.exports = nextConfig;

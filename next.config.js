/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/victor-azevedo/**",
      },
      {
        protocol: "https",
        hostname: "repository-images.githubusercontent.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;

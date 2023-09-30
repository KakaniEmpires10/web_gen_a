/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "loremflickr.com",
        port: "",
        pathname: "/640/480/nightlife",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/200",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**/*",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/400",
      },
    ],
  },
};

module.exports = nextConfig

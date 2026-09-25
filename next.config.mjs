/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        { hostname: 'localhost', protocol: 'http', port: '123', pathname: '/images/**' },
        { protocol: 'https', hostname: 'images.unsplash.com' },
      ],
    },
  };
  

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: '/digital-resume-app',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

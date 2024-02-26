/** @type {import('next').NextConfig} */

const devConfig = {};

const prodConfig = {
  distDir: 'dist',
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  basePath: '/digital-resume-app',
};

const isProd = process.env.NODE_ENV === 'production';
const nextConfig = isProd ? prodConfig : devConfig;

export default nextConfig;

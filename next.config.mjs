/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const prodConfig = {
  distDir: 'dist',
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  basePath: '/digital-resume-app',
};

const devConfig = {};

const nextConfig = isProd ? prodConfig : devConfig;

console.log('isProd', isProd);

export default nextConfig;

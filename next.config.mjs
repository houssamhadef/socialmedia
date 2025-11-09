import { config } from 'process';

/** @type {import('next').NextConfig} */
const nextConfig = {
   eslint: {
      ignoreDuringBuilds: true,
   }
   images: {
    domains: ['slayerdev056792.s3.amazonaws.com', 'localhost', '41.98.114.72']
   },
   
   
};

export default nextConfig;

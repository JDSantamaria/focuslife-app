import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Ignorar errores de ESLint durante el build en producción
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    swcTraceProfiling: false,
    forceSwcTransforms: false,
  },
  swcMinify: true,
  compiler: {
    // fallback to wasm
    useWasm: true,
  },
};

module.exports = nextConfig;

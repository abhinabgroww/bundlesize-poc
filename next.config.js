/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
    performance: {
      maxAssetSize: 100000,
      maxEntrypointSize: 200000,
      hints: 'warning',
    
  }
}



module.exports = nextConfig

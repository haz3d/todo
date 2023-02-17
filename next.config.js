/** 
 * Next.js configuration file
 */

// Import the Next.js configuration object
const nextConfig = {
  // Enable strict mode for React
  reactStrictMode: true,

  // Add experimental features
  // NOTE: Experimental features are not covered by semver, and may cause unexpected or broken application behavior. Use at your own risk.
  experimental: {
    // Enable the 'images' feature
    images: true,

    // Enable the 'swcLoader' feature
    swcLoader: true,
  },
}

// Export the configuration object
module.exports = nextConfig

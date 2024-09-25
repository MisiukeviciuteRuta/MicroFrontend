/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // webpack5: true, // Keep webpack5 as a boolean here
  distDir: 'build', // Defined build directory
  webpack5: (config, options) => { // Use 'webpack' here instead of 'webpack5'
    config.output.publicPath = "/build/"; // Set publicPath for correct URL generation
    config.plugins.push(
      new options.webpack.container.ModuleFederationPlugin({
        name: "fe1",
        filename: "build/remoteEntry.js", // File where your exposed module will live
        remoteType: "var",
        exposes: {
          "./header": "./src/component/Header" // Expose Header component
        },
        shared: [
          {
            react: {
              eager: true,
              singleton: true,
              requiredVersion: false,
            }
          },
          {
            "react-dom": {
              singleton: true,
              eager: true,
              requiredVersion: false,
            }
          },
        ]
      })
    );
    return config;
  }
}

module.exports = nextConfig;

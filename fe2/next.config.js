/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    distDir: 'build',
    webpack5: (config, options) => {
      config.plugins.push(
        new options.webpack.container.ModuleFederationPlugin({
          name:"fe2",
          filename: "remoteEntry_2.js",
          remoteType: "var",
          exposes: {
             "./squareRoot": "./src/app/utils/getSquareRoot.jsx"
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
                eager: true,
                singleton: true,
                requiredVersion: false,
              }
            },
          ]
        })
      )
      return config
    }
  }
  
  module.exports = nextConfig
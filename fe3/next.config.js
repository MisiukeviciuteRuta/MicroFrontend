/** @type {import('next').NextConfig} */

import { resolve } from 'path';
// import path from 'path';

const nextConfig = {
  reactStrictMode: true,
  distDir: 'build',
  webpack5: (config, options) => {
    config.plugins.push(
      new options.webpack.container.ModuleFederationPlugin({
        name: "fe3",
        filename: 'static/consumerFile.js',
        remoteType: "var",
        remotes: {
          fe1: options.isServer
            ? resolve(__dirname, '../fe1/build/remoteEntry.js')
            : 'fe1',
          fe2: options.isServer
            ? resolve(__dirname, '../fe2/build/remoteEntry_2.js')
            : 'fe2',
        },
        shared: [
          {
            react: {
              eager: true,
              singleton: true,
              requiredVersion: false,
            },
          },
          {
            'react-dom': {
              eager: true,
              singleton: true,
              requiredVersion: false,
            },
          },
        ],
      })
    );
    return config;
  },
};

export default nextConfig;

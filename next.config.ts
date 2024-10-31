import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|swf|avi|mov|wmv)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: '[name].[hash].[ext]',
            publicPath: '/_next/static/videos',
            outputPath: 'static/videos',
          },
        },
        {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            publicPath: '/_next/static/videos',
            outputPath: 'static/videos',
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;

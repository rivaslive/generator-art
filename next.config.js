/** @type {import('next').NextConfig} */
const withLess = require('next-with-less');

const nextConfig = withLess({
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  lessLoaderOptions: {
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: {},
      localIdentName: '[path]___[local]___[hash:base64:5]',
    },
  },
});

module.exports = nextConfig;

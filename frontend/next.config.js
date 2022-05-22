// //js
// module.exports = () => {
//   const rewrites = () => {
//     return [
//       {
//         source: "/defi/:path*",
//         destination: "http://localhost:8000/defi/:path*",
//       },
//       {
//         source: "/daos/:path*",
//         destination: "http://localhost:8000/daos/:path*",
//       },
//     ];
//   };
//   return {
//     rewrites,
//   };
// };

const nextConfig = {
    reactStrictMode: true,
    webpack5: true,
    webpack: (config) => {
      config.resolve.fallback = { fs: false };
  
      return config;
    },
  };
  
  module.exports = nextConfig;
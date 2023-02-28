/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
};

module.exports = nextConfig;

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        admin_username: "admin",
        admin_password: "12345",
        mongodb_username: "michal",
        mongodb_password: "AC1IInmb8F18jLTq",
        mongodb_clustername: "cluster0",
        mongodb_database: "shop-dev",
      },
    };
  }
  return {
    env: {
      admin_username: "admin",
      admin_password: "12345",
      mongodb_username: "michal",
      mongodb_password: "AC1IInmb8F18jLTq",
      mongodb_clustername: "cluster0",
      mongodb_database: "shop-dev",
    },
  };
};

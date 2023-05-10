loadEnv(process.env.APP_ENV);

const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

module.exports = withVanillaExtract(nextConfig);

/**
 * @param {string} appEnv
 */
function loadEnv(appEnv = 'local') {
  const env = {
    ...require(`./src/utils/env/env.${appEnv}.js`),
    NEXT_PUBLIC_APP_ENV: appEnv,
  };

  Object.entries(env).forEach(([key, value]) => {
    process.env[key] = value;
  });
}

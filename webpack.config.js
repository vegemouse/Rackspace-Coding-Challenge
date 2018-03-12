const webpackMerge = require('webpack-merge');

const buildValidations = require('./build-utils/build-validations');
const commonConfig = require('./build-utils/webpack.common');

module.exports = env => {

  // We use 'buildValidations' to check for the 'env' flag
  if (!env) {
    throw new Error(buildValidations.ERR_NO_ENV_FLAG);
  }

  const envConfig = require(`./build-utils/webpack.${env.env}.js`);

  const mergedConfig = webpackMerge(
    commonConfig,
    envConfig
  );

  return mergedConfig;
};

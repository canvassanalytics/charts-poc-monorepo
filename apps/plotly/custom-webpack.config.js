const { merge } = require('webpack-merge');

module.exports = (config, context) => {
  return merge(config, {
    node: { global: true },
    resolve: {
      fallback: {
        assert: require.resolve('assert'),
        stream: require.resolve('stream-browserify'),
      },
    },
  });
};

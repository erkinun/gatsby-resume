module.exports = {
  stories: ['../src/**/*.stories.js'],
  // Storybook 8+ ships no JS compiler by default; without this addon the JSX
  // in .js story/component files is never transpiled.
  addons: ['@storybook/addon-links', '@storybook/addon-webpack5-compiler-swc'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  webpackFinal: async config => {
    // Prefer Gatsby's ES6 entrypoint (module) over the commonjs (main) one,
    // so webpack gets the browser build of gatsby-link.
    config.resolve.mainFields = ['browser', 'module', 'main']

    // That browser build ships untranspiled JSX in gatsby/cache-dir, and the
    // compiler addon only covers our own source, so transpile Gatsby too.
    config.module.rules.push({
      test: /\.jsx?$/,
      include: /node_modules[\\/]gatsby/,
      use: {
        loader: require.resolve('swc-loader'),
        options: {
          jsc: {
            parser: { syntax: 'ecmascript', jsx: true },
            transform: { react: { runtime: 'automatic' } },
          },
        },
      },
    })

    return config
  },
}

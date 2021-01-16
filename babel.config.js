module.exports = function(api) {
  api.cache(true)

  const presets = [
    [
      '@babel/preset-env',
      {
        corejs: 3,
        useBuiltIns: 'entry',
        // modules: false,
        // debug: true,
      },
    ],
    ['@babel/preset-react'],
    ['@babel/preset-typescript'],
  ]
  const plugins = [['@babel/plugin-proposal-class-properties']]

  return {
    // sourceMaps: 'inline',
    presets,
    plugins,
  }
}

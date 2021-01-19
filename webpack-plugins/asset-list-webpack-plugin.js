class AssetListWebpackPlugin {
  constructor(options) {
    console.log(options)
    this.filename = options.filename
  }
  apply(complier) {
    complier.hooks.emit.tapAsync(
      'AssetListWebpackPlugin',
      (compilation, callback) => {
        // console.log(compilation.assets)
        let cssList = []
        let jsList = []

        for (const filename in compilation.assets) {
          if (filename.indexOf('.css') !== -1) {
            cssList.push(filename)
          }
          if (filename.indexOf('.js') !== -1) {
            jsList.push(filename)
          }
        }
        const assetName = `${this.filename}.js`
        const finalSource = `
        const ${this.filename} = {
          cssList: ${JSON.stringify(cssList)},
          jsList : ${JSON.stringify(jsList)}
        }
      `
        compilation.assets[assetName] = {
          source: function() {
            return finalSource
          },
          size: function() {
            return finalSource.length
          },
        }

        callback()
      },
    )
  }
}

module.exports = AssetListWebpackPlugin

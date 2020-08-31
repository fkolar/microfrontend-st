const AotPlugin = require("@ngtools/webpack").AngularCompilerPlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const CopyPlugin = require('copy-webpack-plugin');


module.exports = [
  {
    entry: ["./src/polyfills.ts", "./src/main.ts"],
    resolve: {
      mainFields: ["browser", "module", "main"]
    },
    devServer: {
      contentBase: path.join(__dirname, "dist/one-bx"),
      port: 5000
    },
    module: {
      rules: [
        { test: /\.ts$/, loader: "@ngtools/webpack" }
      ]
    },
    plugins: [
      new ModuleFederationPlugin({
        remotes: {
        },
        shared: ["@angular/core", "@angular/common", "@angular/router", "@fundamental-ngx/core"]
      }),
      new AotPlugin({
        skipCodeGeneration: false,
        tsConfigPath: "./tsconfig.app.json",
        directTemplateLoading: true,
        entryModule: path.resolve(
          __dirname,
          "./src/app/app.module#AppModule"
        )
      }),
      new CopyPlugin([
        {from: './src/assets', to: 'assets'},
      ]),
      new HtmlWebpackPlugin({
        template: "./src/index.html"
      })
    ],
    output: {
      filename: "[id].[name].js",
      path: __dirname + "/dist/one-bx",
      chunkFilename: "[id].[chunkhash].js"
    },
    devtool: 'inline-source-map',
    mode: "production"
  }
]
;

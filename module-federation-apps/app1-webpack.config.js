const AotPlugin = require("@ngtools/webpack").AngularCompilerPlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const CopyPlugin = require('copy-webpack-plugin');


module.exports = [
  {
    entry: ["./apps/common-req-app/src/polyfills.ts", "./apps/common-req-app/src/main.ts"],
    resolve: {
      mainFields: ["browser", "module", "main"]
    },
    devServer: {
      contentBase: path.join(__dirname, "dist/apps/common-req-app"),
      port: 3000
    },
    module: {
      rules: [
        {test: /\.ts$/, loader: "@ngtools/webpack"}
      ]
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "commonReqApp",
        library: {type: "var", name: "commonReqApp"},
        filename: "remoteEntry.js",
        exposes: {
          './Download': './apps/common-req-app/src/app/download.component.ts'
        },
        shared: ["@angular/core", "@angular/common", "@angular/router"]
      }),
      new AotPlugin({
        skipCodeGeneration: false,
        tsConfigPath: "./apps/common-req-app/tsconfig.app.json",
        directTemplateLoading: true,
        entryModule: path.resolve(
          __dirname,
          "./apps/common-req-app/src/app/app.module#AppModule"
        )
      }),
      new CopyPlugin([
        {from: './apps/common-req-app/src/assets', to: 'assets'},
      ]),
      new HtmlWebpackPlugin({
        template: "./apps/common-req-app/src/index.html"
      })
    ],
    output: {
      publicPath: "http://localhost:3000/",
      filename: "[name].js",
      path: __dirname + "/dist/apps/common-req-app",
      chunkFilename: "[id].[chunkhash].js"
    },
    mode: "production"
  }
];

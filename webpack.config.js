const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');

const config = {
    entry: {
        main: "./src/index.js",
        // footer: "./src/footer.js",
        // component: "./src/libs/component.js"
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        // library: "myComponent",
        // libraryTarget: "umd"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: ["file-loader"]
            },
            {
              test: /\.svg/,
              use: {
                loader: 'svg-url-loader',
                options: {}
              }
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        port: 7777,
        hot: true
    },
    plugins: [
        new htmlWebpackPlugin({
            title: "myfirstapp",
            template: "./src/index.html"
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new ImageminPlugin({
            plugins: [
                imageminMozjpeg({
                    quality: 10,
                    progressive: true
                })
            ]
        })
    ],
    // devtool: "inline-source-map",
    externals: {
        // jquery: "jQuery"
    },
    optimization: {
        // runtimeChunk: "single",
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all"
                }
            }
        }
    }
}

module.exports = (env, argv) => {
    // console.log(env, argv)
    if (argv.mode === "production") {
        config.devtool = "inline-source-map";
    } else if(argv.mode === "development") {

    }

    // if (env.dev) {
        // ...
    // }

    // if (env.NODE_ENV === "local") {
        // ...
    // }
    return config;
}

// main a71
// vendor 39d
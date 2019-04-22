const isDevEnvironment = process.env.NODE_ENV === "dev";

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const getOptimizationMinimizers = () => {
    const minimizers = [];

    if (!isDevEnvironment) {
        minimizers.push(
            new TerserPlugin({
                test: /\.js$/,
                exclude: /node_modules/,
                cache: true,
                parallel: true,
                terserOptions: {
                    output: {
                        comments: false
                    }
                }
            })
        );

        minimizers.push(
            new OptimizeCssAssetsPlugin({})
        );
    }

    return minimizers;
};

const getJsLoaders = () => {
    const loaders = [
        {
            loader: "babel-loader"
        }
    ];

    if (!isDevEnvironment) {
        loaders.push({
            loader: "eslint-loader"
        });
    }

    return loaders;
};

module.exports = {
    mode: isDevEnvironment ? "development" : "production",
    output: {
        path: path.join(__dirname, "/build"),
        filename: "bundle-[hash].js",
        publicPath: "/"
    },
    resolve: {
        modules: [path.resolve(__dirname, "./app"), "node_modules"],
        alias: {
            "TweenMax": path.resolve("node_modules", "gsap/src/uncompressed/TweenMax.js"),
            "TimelineMax": path.resolve("node_modules", "gsap/src/uncompressed/TimelineMax.js"),
            "animation.gsap": path.resolve("node_modules", "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js"),
            "ScrollMagic": path.resolve("node_modules", "scrollmagic/scrollmagic/uncompressed/ScrollMagic.js")
        }
    },
    optimization: {
        minimizer: getOptimizationMinimizers()
    },
    entry: [
        "babel-polyfill",
        "./app/index.js"
    ],
    devtool: isDevEnvironment ? "source-map" : undefined,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: getJsLoaders()
            },
            {
                test: /\.styl$/,
                use: [

                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: isDevEnvironment
                        }
                    },
                    {
                        loader: "postcss-loader"
                    },
                    {
                        loader: "stylus-loader"
                    },
                ]
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: "svg-inline-loader"
                    }
                ]
            },
            {
                test: /\.pug$/,
                use: [
                    {
                        loader: "pug-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style-[hash].css",
            chunkFilename: "[id].[hash].css"
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "/app/index.pug"),
            filename: "index.html",
            filetype: "html"
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            {
                from: "./app/assets/public/fonts/",
                to: "./assets/fonts"
            },
            {
                from: "./app/assets/public/images/",
                to: "./assets/images"
            },
            {
                from: "./app/assets/public/sounds/",
                to: "./assets/sounds"
            }
        ]),
    ],
    devServer: {
        contentBase: "./",
        port: 3000
    }
};

const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    entry: {
        app: path.join(__dirname, "src", "index.tsx"),
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".css"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: "/node_modules/",
            },
            {
                test: /\.css$/i,
                use: [
                  "style-loader",
                  "css-loader",
                  {
                    loader: "postcss-loader",
                    options: {
                      postcssOptions: {
                        plugins: [
                          [
                            "postcss-preset-env",
                            {
                              // Options
                            },
                          ],
                        ],
                      },
                    },
                  },
                ],
              },
            // {
            //     test: /\.module.css$/,
            //     use: [
            //         MiniCssExtractPlugin.loader,
            //         {
            //             loader: "css-loader",
            //             options: {
            //                 esModule: true,
            //                 modules: {
            //                     namedExport: true,
            //                 },
            //             },
            //         },
            //     ],
            // },
        ],
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),
        }),
        new MiniCssExtractPlugin(),
    ],
}

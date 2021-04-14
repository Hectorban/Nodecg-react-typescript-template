const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const dashboardNames = [
    'panel',
    'panel2',
    'panel3'
];

let dashboardEntries = {}, dashboardPlugins = [];
dashboardNames.forEach(name => {
    dashboardEntries[name] = [`./src/dashboard/${name}/index.js`];
    dashboardPlugins.push(new HtmlWebpackPlugin({
        filename: `${name}/index.html`,
        template: `./src/dashboard/${name}/index.html`,
        chunks: [name]
    }));
});

const dashboardConfig = {
    entry: dashboardEntries,
    output: {
        filename: '[name]/index.js',
        path: path.join(__dirname, 'dashboard'),
        clean: true
    },
    devtool: 'source-map',
    plugins: dashboardPlugins,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {url:false}
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ],
            },
            {
                test: /\.(png|svg|jpg|gif|webm)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/'
                        }
                    }
                ],
            }
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    mode: 'development',
    devServer: {
        index: '[name]/index.html',
        contentBase: path.resolve(__dirname, 'dashboard'),
        hot: true,
    }
};

const graphicNames = [
    'index',
    'index2',
    'index3'
];

let graphicEntries = {}, graphicPlugins = [];
graphicNames.forEach(name => {
    graphicEntries[name] = [`./src/graphics/${name}/index.js`];
    graphicPlugins.push(new HtmlWebpackPlugin({
        filename: `${name}/index.html`,
        template: `./src/graphics/${name}/index.html`,
        chunks: [name]
    }));
});

const graphicsConfig = {
    entry: graphicEntries,
    output: {
        filename: '[name]/index.js',
        path: path.join(__dirname, 'graphics'),
        clean: true
    },
    devtool: 'source-map',
    plugins: graphicPlugins,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {url:false}
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ],
            },
            {
                test: /\.(png|svg|jpg|gif|webm)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/'
                        }
                    }
                ],
            }
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    mode: 'development',
    devServer: {
        filename: '[name]/index.html',
        contentBase: path.resolve(__dirname, 'graphics'),
        hot: true,
    },
};

const extensionConfig = {
    target: "node",
    entry: './src/extension/index.js',
    output: {
        filename: 'index.js',
        path: path.join(__dirname, 'extension'),
        libraryTarget: 'commonjs2'
    },
    mode: 'development',
    devtool: 'source-map',
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {modules: 'commonjs'}
                            ]
                        ],
                        plugins: ['add-module-exports']
                    }
                }
            }
        ]
    },
    performance: {
        hints: false
    }
};

module.exports = [
    dashboardConfig,
    graphicsConfig,
    extensionConfig,
];
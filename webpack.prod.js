const HtmlWebPackPlugin       = require('html-webpack-plugin'); 
const MiniCssExtractPlugin    = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const templates = [
    { template: './src/index.html', filename: './index.html' , chunks: ['common','index'] },
    { template: './src/pages/await.html', filename: './await.html' , chunks: ['common','await'] },
    { template: './src/pages/callbacks.html', filename: './callbacks.html', chunks: ['common','callbacks']  },
    { template: './src/pages/promesas.html', filename: './promesas.html', chunks: ['common','promesas']  }
 
];

const htmlPlugins = templates.map(({ template, filename, chunks }) => 
    new HtmlWebPackPlugin({ 
        template, 
        filename, 
        chunks 
    })
);
module.exports = {
    mode: 'production',
    entry: {
        common: './src/js/common.js',
        index: './src/index.js', 
        await: './src/js/await.js', 
        callbacks: './src/js/callbacks.js', 
        promesas: './src/js/promesas.js'
    },
    optimization: {
        minimizer: [ new OptimizeCssAssetsPlugin() ]
    },
    output: {
        filename: 'main.[contentHash].js'
    },
    module: {
        rules: [
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.css$/,
                exclude: /styles\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /styles\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: false }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                            name: 'assets/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        ...htmlPlugins,
        new MiniCssExtractPlugin({
            filename: '[name].[contentHash].css',
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns: [
            { from: 'src/assets', to: 'assets/' },
        ]}),
    ]

}


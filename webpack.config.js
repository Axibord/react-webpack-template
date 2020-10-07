const path = require('path') // resolve path
const HtmlWebpackPlugin = require('html-webpack-plugin') // create file.html
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // clean the folder each build
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // extract css to files
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin') // minify css
const TerserPlugin = require('terser-webpack-plugin') // minify js

module.exports = {
	mode: 'development',
	devtool: 'eval-cheap-source-map',
	devServer: { contentBase: path.join(__dirname, 'prod'), port: 3000, hot: true },

	entry: {
		index: path.join(__dirname, 'src/index.jsx')
	},

	output: {
		path: path.resolve(__dirname, './prod'),
		filename: '[name].[hash].bundle.js' // for production use [contenthash], for developement use [hash]
	},
	plugins: [
		new MiniCssExtractPlugin({ filename: '[name].[contenthash].css', chunkFilename: '[id].[contenthash].css' }),
		// new CleanWebpackPlugin(),
		new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }), // tell webpack that we dont want to remove index.html after each update
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'index.html')
		})
	],

	optimization: {
		minimizer: [new TerserPlugin(), new OptimizeCssAssetsPlugin({})],

		moduleIds: 'hashed',
		runtimeChunk: 'single',
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all'
				}
			}
		}
	},

	module: {
		rules: [
			{
				test: /\.(css|scss)$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			},
			{
				test: /\.(png|svg|jpg|gif)$/i,
				use: ['file-loader']
			},
			{
				test: /\.html$/,
				use: [{ loader: 'html-loader' }]
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components|prod)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			}
		]
	}
}

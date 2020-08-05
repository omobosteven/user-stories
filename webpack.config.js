const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool: 'eval-source-map',
	entry: './src/index.js',
	output: {
		path: `${__dirname}/dist`,
		publicPath: '/',
		filename: '[hash].min.js',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_moudules/,
				use: [{ loader: 'babel-loader' }],
			},
			{
				test: /\.(sa|sc|c)ss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html',
		}),
	],
	devServer: {
		historyApiFallback: true,
		hot: true,
		port: 3001,
	},
};

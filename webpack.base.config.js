const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = [{
	entry: ['./assets/index.js'],
	output: {
		path:path.join(__dirname,'./assets/bundles/'),
		filename:'[name]-[hash].js',
		publicPath:'http://localhost:8080/assets/bundles/'
	},
	module:{
		rules:[
			{
				test:/\.jsx?$/,
				exclude:/node_modules/,
				use: {
					loader:'babel-loader'
				},
			},
			{
				test:/\.css$/,
				use: [
					{loader: 'style-loader'},
					{loader: 'css-loader'},
				],
			},
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
			template:'./assets/index.html'
		}),
		new BundleTracker({
			filename: './assets/webpack-stats.json'
		})
	]
}];

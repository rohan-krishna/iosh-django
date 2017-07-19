var webpack = require('webpack');
var path = require('path');

var config = {
	entry: path.resolve(__dirname,'src/main.js'),
	output: {
		path: path.resolve(__dirname, 'build'),
		filename : 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js?/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	}
};

module.exports = config;
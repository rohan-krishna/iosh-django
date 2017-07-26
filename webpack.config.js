var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname + '/household/static/household/js');
var APP_DIR = path.resolve(__dirname + '/source/asset/public');

module.exports =  {
	entry : {
		main : APP_DIR + '/app.js',
	},
	watch: true,
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?/,
				include: APP_DIR,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	}
};
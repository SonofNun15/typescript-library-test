var path = require('path');

module.exports = {
	entry: './source/app',
	output: {
		path: path.resolve('built'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				loader: 'ts-loader',
			},
		],
	},
	resolve: {
		extensions: ['', '.webpack.js','.web.js', '.js', '.ts'],
	},
};
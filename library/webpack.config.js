var path = require('path');

module.exports = {
	entry: './source/library',
	output: {
		path: path.resolve('built'),
		filename: 'library.js',
		library: 'library',
		libraryTarget: 'commonjs2',
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
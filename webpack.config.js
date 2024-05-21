const path = require('path')
module.exports = {
	mode: 'production',
	entry: {
		app: "./src/js/app.js",
		index: "./src/js/index.js",
	},
	output: {
		path: path.resolve(__dirname,'dist'),
		filename: '[name].bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							['@babel/preset-env']
						]
					}
				}
			}
		]
	},
	watch: true
}
const path = require('path')
module.exports = {
	mode: 'development',
	entry: "./src/js/index.js",
	output: {
		path: path.resolve(__dirname,'dist'),
		filename: 'bundle.js',
		publicPath: '/'
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
			},
			{
				test: /\.(png|jpg|jpeg|gif|svg)$/,
				use: [
				  {
					loader: 'file-loader',
					options: {
					  name: 'assets/images/[name].[ext]'
					}
				  }
				]
			},
		]
	},
	watch: true
}
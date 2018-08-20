const HtmlWebPackPlugin = require("html-webpack-plugin");
var path = require('path');

module.exports = {
	context: path.join(__dirname, "src"),
	devtool: 'inline-source-map',	
	entry: "./js/client.js",
	stats: {
		colors: true,
		modules: true,
		reasons: true,
		errorDetails: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
			  		loader: "babel-loader"
				}
			},
			{
				test: /\.svg$/,
				exclude: /node_modules/,
				use: {
			  		loader: "svg-react-loader"
				}
			},			
			{
				test: /\.html$/,
				exclude: /node_modules/,
				use: [{
			    	loader: "html-loader"
			  	}]
			},
			{
				test: /\.(gif|png|jpe?g|svg|ttf|woff?2|eot)$/i,
				exclude: /node_modules/,
				use: [{
					loader: "file-loader",
					options: {
					}
				}]
			}
		]
	},
	output: {
    	path: path.join(__dirname, "src"),
    	filename: "client.min.js"
  	},	
  	devServer: {
  		historyApiFallback: true,
  		publicPath: '/'
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./index.html",
			filename: "./index.html"
		})
	]
};
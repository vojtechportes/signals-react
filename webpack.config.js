const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebPackPlugin = require("copy-webpack-plugin");
var path = require('path');

module.exports = {
	context: path.join(__dirname, "src"),
	entry: "./js/client.js",
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
					loader: "file-loader"
				}]
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [{
					loader: 'webpack-replace-loader',
					options: {
						arr: [{
							search:'./src/assets',
							replace: './assets',
							attr: 'g'
						}]	
					}
				}]
			}
		]
	},
	output: {
    	path: path.join(__dirname, "dist"),
    	filename: "client.min.js",
    	publicPath: "/"
  	},	
	plugins: [
		new HtmlWebPackPlugin({
			template: "./index.html",
			filename: "./index.html"
		}),
		new CopyWebPackPlugin([
			{
				from: "./assets",
				to: "./assets"
			},
			{
				from: "./apache",
				to: "./"
			}
		])
	]
};
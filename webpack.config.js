var path = require('path');
var webpack = require('webpack');

module.exports = {
	context: path.resolve(__dirname + '/src'),
	entry: './main.js',
	output: {
		filename: 'bundle.js',
		libraryTarget: 'amd'
	},
	amd: {jQuery: true},
	resolve: {
		alias: {
			'esri': path.resolve(__dirname, 'bower_components/esri'),
			'dojo': path.resolve(__dirname, 'bower_components/dojo'),
			'dgrid': path.resolve(__dirname, 'bower_components/dgrid'),
			'dijit': path.resolve(__dirname, 'bower_components/dijit'),
			'dojox': path.resolve(__dirname, 'bower_components/dojox'),
			'dstore': path.resolve(__dirname, 'bower_components/dstore'),
			'moment': path.resolve(__dirname, 'bower_components/moment'),
			'util': path.resolve(__dirname, 'bower_components/util')
		}
	}
}
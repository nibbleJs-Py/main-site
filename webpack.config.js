const path = require("path");
module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'nibble-packed.js',
		path: path.resolve(__dirname, 'dist')
	},
	mode: 'development'
}
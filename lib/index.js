'use strict';

var FS      = require('fs');
var Path    = require('path');
var Through = require('through2');

var PLUGIN_NAME = 'gulp-sourcemaps-support';

var include;
include = FS.readFileSync(Path.join(__dirname, 'include.js'), 'utf-8');
console.info('»', include);
process.exit(1);

include = include.replace(/\/{2}\#.*$/, '//'); // avoid interference from sourcemaps

module.exports = function(){

	return Through.obj(function(file, encoding, callback){
		if (!file.isBuffer() || !file.contents.length) return callback(null, file);
		file.contents = new Buffer([include, file.contents.toString(encoding)].join('\n'));
		callback(null, file);
	});
};
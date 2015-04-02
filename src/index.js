'use strict';

const FS          = require('fs');
const Path        = require('path');
const Through     = require('through2');

const PLUGIN_NAME = 'gulp-sourcemaps-support';

let include;
include = FS.readFileSync(Path.join(__dirname, 'include.js'), 'utf-8');
include = include.replace(/\/{2}\#.*$/, '//'); // avoid interference from sourcemaps

module.exports = function(){

	return Through.obj(function(file, encoding, callback){
		if (!file.isBuffer() || !file.contents.length) return callback(null, file);
		file.contents = new Buffer([include, file.contents.toString(encoding)].join('\n'));
		callback(null, file);
	});
};
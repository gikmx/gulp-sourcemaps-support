try {
	require('gulp-sourcemaps-support/install')();
} catch(e){
	console.log('Please, install \"source-map-support\" package.\n\n', e.message);
	process.exit(1);
}
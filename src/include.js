try {
	require('gulp-sourcemaps-support/build/install')();
} catch(e){
	console.log('Please, install \"source-map-support\" package.');
	process.exit(1);
}
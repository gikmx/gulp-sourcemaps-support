# gulp-sourcemaps-support

A companion for [gulp-sourcemaps](https://github.com/floridoo/gulp-sourcemaps)
that automatically enables [source-map-support](https://github.com/evanw/node-source-map-support) for NodeJS.

### Installation

Install it as a dev dependency on your project, along with [gulp-sourcemaps](https://github.com/floridoo/gulp-sourcemaps)

```bash
npm install --save-dev gulp-sourcemaps gulp-sourcemaps-support
```


### Usage

Require it on your `gulpfile.js`

```javascript
var SourceMap        = require('gulp-sourcemaps');
var SourceMapSupport = require('gulp-sourcemaps-support');
```

Use it on your tasks, but remember to always call it before `gulp-sourcemaps`.

```javascript
Gulp.task('build', ['clean', 'lint', 'test'], function(){
	return Gulp.src(Route.src)
		.pipe(SourceMapSupport())
		.pipe(SourceMap.init())
		.pipe(Babel(Config.babel))  // your extra plugins here
		.pipe(SourceMap.write('.'))
		.pipe(Gulp.dest(Dir.build));
});
```
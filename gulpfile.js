// Include gulp
var gulp = require('gulp');

// Include Plugins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var babel = require("gulp-babel");

gulp.task('job-2015-09-muji-js', function(){
	return gulp.src([
			'./source/js/!.js',

			'./node_modules/q/q.js',
			'./source/js/library/jquery-2.1.4.js',
			
			'./source/js/base.js',
			'./source/js/main.js',

			'./source/js/scenes/photos.js',
			'./source/js/scenes/timeline.js',
			'./source/js/scenes/ad.js',
			'./source/js/scenes/summary.js'
		])
		.pipe(concat('js.js'))
		.pipe(babel({
			'highlightCode':	false,
			'comments':			false,
			'compact':			true,
			'ast':				false
		}))
		.pipe(uglify())
		.pipe(gulp.dest('./assets'))
})

gulp.task('job-2015-09-muji-css', function(){
	return gulp.src([
			'./source/css.less'
		])
		.pipe(less())
		.pipe(minifyCSS())
		.pipe(postcss([
			autoprefixer({
				'browsers': [
					'Android >= 2',
					'Chrome >= 30',
					'ie >= 10',
					'Edge >= 20',
					'iOS >= 6',
					'ChromeAndroid >= 30',
					'ExplorerMobile >= 10'
				]
			})
		]))
		.pipe(gulp.dest('./assets'))
})

gulp.task('job-2015-09-muji-watch', function(){
	gulp.watch(
			'./source/**/*.js',
			['job-2015-09-muji-js']
		)
	gulp.watch(
			'./source/**/*.less',
			['job-2015-09-muji-css']
		)
})

gulp.task('default',[
	'job-2015-09-muji-js',
	'job-2015-09-muji-css',
	'job-2015-09-muji-watch'
])
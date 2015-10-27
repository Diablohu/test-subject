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

gulp.task('default',[
	'job-2015-09-muji_v2'
])








// v2

gulp.task('job-2015-09-muji_v2-js', function(){
	return gulp.src([
			'./source/js/!.js',

			'./node_modules/q/q.js',
			'./source/js/library/jquery-2.1.4.js',
			'./node_modules/hammerjs/hammer.js',
			'./node_modules/jquery-hammerjs/jquery.hammer.js',
			'./node_modules/iscroll/build/iscroll-probe.js',
			
			'./source/js/base.js',
			'./source/js/main.v2.js',

			'./source/js/scenes/entry.js',
			'./source/js/scenes/photos.v2.js',
			'./source/js/scenes/timeline.v2.js',
			//'./source/js/scenes/ad.js',
			'./source/js/scenes/staff.js',
			'./source/js/scenes/summary.js',
			'./source/js/scenes/recruit.js',
			'./source/js/scenes/end.js'
		])
		.pipe(concat('js.v2.js'))
		.pipe(babel({
			'highlightCode':	false,
			'comments':			false,
			'compact':			true,
			'ast':				false
		}))
		//.pipe(uglify())
		.pipe(gulp.dest('./assets'))
})

gulp.task('job-2015-09-muji_v2-css', function(){
	return gulp.src([
			'./source/css.v2.less'
		])
		.pipe(less())
		.pipe(minifyCSS())
		.pipe(postcss([
			autoprefixer({
				'browsers': [
					'Android >= 2',
					'Chrome >= 20',
					'Firefox >= 20',
					'ie >= 11',
					'Edge >= 12',
					'iOS >= 5',
					'ChromeAndroid >= 20',
					'ExplorerMobile >= 11'
				]
			})
		]))
		.pipe(gulp.dest('./assets'))
})

gulp.task('job-2015-09-muji_v2-watch', function(){
	gulp.watch(
			'./source/**/*.js',
			['job-2015-09-muji_v2-js']
		)
	gulp.watch(
			'./source/**/*.less',
			['job-2015-09-muji_v2-css']
		)
})

gulp.task('job-2015-09-muji_v2',[
	'job-2015-09-muji_v2-js',
	'job-2015-09-muji_v2-css',
	'job-2015-09-muji_v2-watch'
])








// v1

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
					'Chrome >= 25',
					'Firefox >= 20',
					'ie >= 11',
					'Edge >= 12',
					'iOS >= 5',
					'ChromeAndroid >= 25',
					'ExplorerMobile >= 11'
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

gulp.task('job-2015-09-muji_v1',[
	'job-2015-09-muji-js',
	'job-2015-09-muji-css',
	'job-2015-09-muji-watch'
])
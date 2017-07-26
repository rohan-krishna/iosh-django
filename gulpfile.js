var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var webpack = require('gulp-webpack');
var notify = require('gulp-notify');

gulp.task('build', function() {
	return gulp.src("")
				.pipe(webpack(require('./webpack.config.js')))
				.pipe(notify("webpack compiled"))
				.pipe(gulp.dest('household/static/household/js'))
});

gulp.task('build-css', function() {
	return gulp.src("source/asset/public/sass/**/*.scss")
				.pipe(sourcemaps.init())
				.pipe(sass().on('error', sass.logError))
				.pipe(sourcemaps.write())
				.pipe(notify("Sass has been compiled!"))
				.pipe(gulp.dest('household/static/household/css'));
});

gulp.task('watch', ['build','build-css'] , function() {
	gulp.watch('source/asset/public/sass/**/*.scss',['build-css']);
	gulp.watch('',['build']);
});

gulp.task('watch-css', ['build-css'], function() {
	gulp.watch('source/asset/public/sass/**/*.scss', ['build-css']);
});
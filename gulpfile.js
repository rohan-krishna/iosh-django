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

gulp.task('watch', ['build'] , function() {
	gulp.watch('',['build']);
});

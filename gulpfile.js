'use strict';









var gulp = require('gulp'),
	browser = require('browser-sync').create(),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	minijyJS = require('gulp-uglify'),
	concatJS = require('gulp-concat');



gulp.task('003', function() {
	browser.init({

		});
	gulp.watch('web/assets/css/inuitcss/**/*.scss',['sass']);
	});







gulp.task('html', function() {
	return gulp
		.src('templates/*.html')
		.pipe(gulp.dest('dist'));
});





gulp.task('sass', function() {
	return gulp
	.src('web/assets/css/inuitcss/**/*.scss')
	.pipe(sass({
outputStyle: 'expanded'
		}))
	.pipe(autoprefixer({
		browsers: ['last 2 versions', 'ie 6-14']
		}))
	.pipe(gulp.dest('web/assets/css/'));
	})


gulp.task('default', ['html', 'sass','003']);	
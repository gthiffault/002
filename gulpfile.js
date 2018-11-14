'use strict';









var gulp = require('gulp'),
	browser = require('browser-sync').create();


gulp.task('server', function() {
	browser.init({
			injectChanges: true,
			server: {
				baseDir: 'dist'
			}
		});
	gulp.watch('templates/*.html', ['watch-html']);
	});



gulp.task('html', function() {
	return gulp
		.src('templates/*.html')
		.pipe(gulp.dest('dist'));
});


gulp.task('watch-html', ['html'], function(done) {
	browser.reload();
	done();
	});

gulp.task('default', ['server']);	
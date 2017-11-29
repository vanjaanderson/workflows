var gulp = require('gulp'),
	gutil = require('gulp-util'),
	coffee = require('gulp-coffee'),
	coffeeSources = ['components/coffee/*.coffee'];

gulp.task('coffee', function() {
	gulp.src('components/coffee/tagline.coffee')
		.pipe(coffee({bare: true}) // Compiles Javascript
			.on('error', gutil.log))
		.pipe(gulp.dest('components/scripts'))
});
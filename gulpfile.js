var gulp = require('gulp');

// Plugins
var sass = require('gulp-sass');

// Compile Sass files
gulp.task('scss', function() {
    return gulp.src('./_scss/style.scss')
        .pipe(sass())
	.pipe(gulp.dest('./css/'));
});

// Watch files for changes
gulp.task('watch', function() {
    gulp.watch('./_scss/*.scss', ['sass']);
});

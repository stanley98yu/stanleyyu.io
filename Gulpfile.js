'use strict';

var del = require("del");
var gulp = require("gulp");
var sass = require("gulp-sass");
var sassLint = require('gulp-sass-lint');

/* ============
   ==  SCSS  ==
   ============ */

gulp.task('scss:lint', function (done) {
  return gulp.src('scss/**/*.s+(a|c)ss')
    .pipe(sassLint({
      files: { ignore: 'scss/**/*.min.s+(a|c)ss' },
      configFile: './sass-lint.yml',
    }))
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
    done();
});

gulp.task('scss:build', function (done) {
  gulp.src('./scss/style.scss')
    .pipe(sass({
      outputStyle: 'compressed',
    }))
    .pipe(gulp.dest('./static/css/'))
    done();
});

gulp.task('scss', gulp.series('scss:lint', 'scss:build'));

/* ==============
   ==  GLOBAL  ==
   ============== */

gulp.task('clean', function (cb) {
  return del(['./site/', './resources/'], cb);
});

gulp.task('serve', gulp.series('scss', function (done) {
  gulp.watch('scss/**/*.scss', gulp.series('scss'));
  done();
}));

gulp.task('default', gulp.series('serve'));

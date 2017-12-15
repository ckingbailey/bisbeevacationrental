const gulp = require('gulp');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const del = require('del');
const rename = require('gulp-rename');
const sass = require('gulp-sass');

function minifyImgs() {
  return gulp.src('photos/keepers/*.jpg')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/photos'));
}

function compileSass() {
  return gulp.src('scss/sassy-styles.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    })
    .on('error', sass.logError))
    .pipe(rename('style-min.css')
    .on('error', rename.logError))
    .pipe(gulp.dest('dist/css'));
}

gulp.task('minifyImgs', minifyImgs);
gulp.task('scss', compileSass);

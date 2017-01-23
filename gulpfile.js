const gulp = require('gulp');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const del = require('del');
const rename = require('gulp-rename');

function minifyImgs() {
  return gulp.src('photos/keepers/*.jpg')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/photos'))
    .then(console.log('images minified'));
}

gulp.task('minifyImgs', minifyImgs);

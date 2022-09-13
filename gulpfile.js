const gulp = require("gulp")
const uglifycss = require('gulp-uglifycss');
const uglifyjs = require('gulp-uglifyjs');
const concat = require('gulp-concat');

gulp.task('css', async function () {
    gulp.src('../css/*.css')
        .pipe(concat('concat.min.css'))
        .pipe(uglifycss({
            "maxLineLen": 2000,
            "uglyComments": true
        }))
        .pipe(gulp.dest('../dist/css'));
});

gulp.task('js', async function () {
    gulp.src('../js/*.js')
        .pipe(concat('concat.min.js'))
        .pipe(uglifyjs())
        .pipe(gulp.dest('../dist/js'))
});
const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
let csso = require('gulp-csso');

function style() {
    return gulp.src('./Styles/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./Styles/main.css/main.css'))
        .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: true,
        baseDir: './',

    });
}
gulp.watch('./Styles/*.scss', style);
gulp.watch('./index.html').on('change', browserSync.reload);

exports.style = style;
exports.watch = watch;
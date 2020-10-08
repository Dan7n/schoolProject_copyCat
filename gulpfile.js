let gulp = require('gulp');
let scss = require('gulp-sass');
let csso = require('gulp-csso');
let { watch } = require('gulp')

watch(['Styles/*.scss', '!css/main.css'], function(cb) {
    cb()
});

gulp.task('default', function() {
    return gulp.src('Styles/*scss')
        .pipe(scss())
        .pipe(gulp.dest('css'))
        .pipe(csso())
        .pipe(gulp.dest('css'));

});
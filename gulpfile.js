let gulp = require('gulp');
let sass = require('gulp-sass');
let minify = require('gulp-csso');
let browserSync = require('browser-sync').create();


gulp.task("compile", function() {
    return gulp.src("./Styles/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("css"))
        .pipe(minify())
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());

});

gulp.task('reload', gulp.series("compile", function() {
    browserSync.init({
        server: "./"
    });
    gulp.watch("./Styles/**/*.scss", gulp.series("compile"));
    gulp.watch("./*.html").on('change', browserSync.reload);
}));


gulp.task("default", gulp.series("reload"), function() {})
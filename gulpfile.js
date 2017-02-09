var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var bulkSass = require('gulp-sass-bulk-import');

var paths = {
    sass: ['./scss/*.scss']
};

gulp.task('default', ['sass']);

gulp.task('sass', function(done) {
    gulp.src('./scss/style.scss')
        .pipe(bulkSass())
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(gulp.dest('./css/'))
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest('./css/'))
        .on('end', done);
});

gulp.task('watch-sass', function() {
    gulp.watch(paths.sass, ['sass']);
});
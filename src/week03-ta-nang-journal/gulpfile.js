const gulp = require('gulp');
const bs = require('browser-sync').create(); // create a browser sync instance

gulp.task('browser-sync', function() {
    bs.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('watch', function () {
    gulp.watch("*.html").on('change', bs.reload);
    gulp.watch("css/*.css").on('change', bs.reload);
    gulp.watch("js/*.js").on('change', bs.reload);
});
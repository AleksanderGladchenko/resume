const gulp = require('gulp');
const livereload = require('gulp-livereload');

gulp.task('livereload', function () {

    gulp.src('./css/*.css')
    pipe(livereload());
})

gulp.task('defoult', function () {
    livereload.listen()
    gulp.watch('.css/*css', ['livereload']);
}
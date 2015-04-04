var gulp  = require('gulp');
var clean = require('gulp-clean');

gulp.task('clean', ['clean:tmp', 'clean:dst']);

gulp.task('clean:tmp', function() {
  return gulp
    .src(join(config.root, config.tmp), {read: false})
    .pipe(clean());
});

gulp.task('clean:dst', function() {
  return gulp
    .src(join(config.root, config.dst), {read: false})
    .pipe(clean());
});

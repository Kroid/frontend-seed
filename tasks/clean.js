var clean = require('gulp-clean');


gulp.task('clean', ['clean:tmp', 'clean:dst']);

gulp.task('clean:tmp', function() {
  dir = path.join(config.root, config.tmp);
  gulp
    .src(dir, {read: false})
    .pipe(clean());
});

gulp.task('clean:dst', function() {
  dir = path.join(config.root, config.dst);
  gulp
    .src(dir, {read: false})
    .pipe(clean());
});


var src  = join(config.root, config.app, config.scripts);
var dest = join(config.root, config.tmp);


gulp.task('transform:scripts', function() {
  gulp
    .src(src)
    .pipe(gulp.dest(dest));
});

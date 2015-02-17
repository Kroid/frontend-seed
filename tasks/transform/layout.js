var src  = join(config.root, config.app, config.layout);
var dest = join(config.root, config.tmp);


gulp.task('transform:layout', function() {
  gulp
    .src(src)
    .pipe(jade({pretty: false}))
    .pipe(gulp.dest(dest));
});

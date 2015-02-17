var src  = join(config.root, config.app, 'bower_components', '**/*');
var dest = join(config.root, config.tmp, 'bower_components');


gulp.task('transform:bower', function() {
  gulp.src(src).pipe(gulp.dest(dest));
});

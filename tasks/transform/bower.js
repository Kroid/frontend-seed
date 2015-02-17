var src  = path.join(config.root, config.app, 'bower_components', '**/*');
var dest = path.join(config.root, config.tmp, 'bower_components');


gulp.task('transform:bower', function() {
  gulp.src(src).pipe(gulp.dest(dest));
});

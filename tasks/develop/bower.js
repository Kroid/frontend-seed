var gulp  = require('gulp');
var watch = require('gulp-watch');

var src  = join(config.root, config.app, 'bower_components', '**/*');
var dest = join(config.root, config.tmp, 'bower_components');


gulp.task('develop:bower', function() {
  gulp
    .src(src)
    .pipe(watch(src))
    .pipe(gulp.dest(dest));
});

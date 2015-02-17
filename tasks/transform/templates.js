var jade = require('gulp-jade');

var src  = join(config.root, config.app, config.templates);
var dest = join(config.root, config.tmp);


gulp.task('transform:templates', function() {
  gulp
    .src(src)
    .pipe(jade())
    .pipe(gulp.dest(dest));
});

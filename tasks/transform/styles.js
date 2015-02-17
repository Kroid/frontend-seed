var sass = require('gulp-sass');

var src  = join(config.root, config.app, config.styles)
var dest = join(config.root, config.tmp);


gulp.task('transform:styles', function() {
  gulp
    .src(src)
    .pipe(sass())
    .pipe(gulp.dest(dest));
});

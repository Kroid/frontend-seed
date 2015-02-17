var _ = require('underscore');
var sass = require('gulp-sass');

var styles = config.styles

if (!_.isArray(styles)) {
  styles = [styles]
}

var src = _.map(styles, function(filepath) {
  return path.join(config.root, config.app, filepath)
});

var dest = path.join(config.root, config.tmp);


gulp.task('transform:styles', function() {
  gulp
    .src(src)
    .pipe(sass())
    .pipe(gulp.dest(dest));
});

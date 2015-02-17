var _ = require('underscore');

var scripts = config.scripts;

if (!_.isArray(scripts)) {
  scripts = [scripts]
}

var src = _.map(scripts, function(filepath) {
  return path.join(config.root, config.app, filepath)
});

var dest = path.join(config.root, config.tmp);


gulp.task('transform:scripts', function() {
  gulp
    .src(src)
    .pipe(gulp.dest(dest));
});

var _ = require('underscore');
var jade = require('gulp-jade');

var templates = config.templates

if (!_.isArray(templates)) {
  templates = [templates]
}

var src = _.map(templates, function(filepath) {
  return path.join(config.root, config.app, filepath)
});

var dest = path.join(config.root, config.tmp);


gulp.task('transform:templates', function() {
  gulp
    .src(src)
    .pipe(jade())
    .pipe(gulp.dest(dest));
});

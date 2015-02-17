var batch = require('gulp-batch');
var watch = require('gulp-watch');

var bower = join(config.root, config.app, 'bower_components', '**/*');
var layout = join(config.root, config.app, config.layout);
var scripts = join(config.root, config.app, config.scripts);
var styles = join(config.root, config.app, config.styles)
var templates = join(config.root, config.app, config.templates);

gulp.task('watch', [
  'watch:bower',
  'watch:layout',
  'watch:scripts',
  'watch:styles',
  'watch:templates'
]);

gulp.task('watch:bower', function() {
  watch(bower, batch(function() {
    gulp.start('transform:bower');
  }));
});

gulp.task('watch:layout', function() {
  watch(layout, batch(function() {
    gulp.start('transform:layout');
  }));
});

gulp.task('watch:scripts', function() {
  watch(scripts, batch(function() {
    gulp.start('transform:scripts');
  }));
});

gulp.task('watch:styles', function() {
  watch(styles, batch(function() {
    gulp.start('transform:styles');
  }));
});

gulp.task('watch:templates', function() {
  watch(templates, batch(function() {
    gulp.start('transform:templates');
  }));
});

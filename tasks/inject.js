var wiredep = require('wiredep').stream;
var inject  = require('gulp-inject');

gulp.task('inject:layout', function() {
  var layout = config.layout;
  var extname = path.extname(layout);
  layout = layout.replace(extname, '.html');

  var src  = path.join(config.root, config.tmp, config.layout);
  var bowerSrc = path.join(config.root, config.tmp, 'bower_components');
  var injectSrc = [
    path.join(config.root, config.tmp, '**/*.css'),
    path.join(config.root, config.tmp, '**/*.js'),
    path.join('!', config.root, config.tmp, 'bower_components/**/*')
  ]
  var dest = path.join(config.root, config.tmp);

  gulp
    .src(src)
    .pipe(wiredep({
      directory: bowerSrc,
      exclude: []
    }))
    .pipe(inject(gulp.src(injectSrc, {read: false})))
    .pipe(gulp.dest(dest));
});

var path    = require('path');
var wiredep = require('wiredep').stream;
var inject  = require('gulp-inject');

gulp.task('inject:layout', function() {
  var layout = config.layout;
  var extname = path.extname(layout);
  layout = layout.replace(extname, '.html');

  var src       = join(config.root, config.tmp, config.layout);
  var bowerSrc  = join(config.root, config.tmp, 'bower_components');
  var injectSrc = [
    join(config.root, config.tmp, '**/*.css'),
    join(config.root, config.tmp, '**/*.js'),
    join('!', config.root, config.tmp, 'bower_components/**/*')
  ]
  var dest = join(config.root, config.tmp);

  gulp
    .src(src)
    .pipe(wiredep({
      directory: bowerSrc,
      exclude: []
    }))
    .pipe(inject(gulp.src(injectSrc, {read: false})))
    .pipe(gulp.dest(dest));
});

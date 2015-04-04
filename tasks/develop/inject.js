var path    = require('path');
var gulp    = require('gulp');
var inject  = require('gulp-inject');
var batch   = require('gulp-batch');
var watch   = require('gulp-watch');
var wiredep = require('wiredep').stream;

var layout   = getLayout();
var dest     = join(config.root, config.tmp);
var bowerSrc = join(config.root, config.tmp, 'bower_components');
var appSrc   = [
  join(config.root, config.tmp, '**/*.css'),
  join(config.root, config.tmp, '**/*.js'),
  join('!', config.root, config.tmp, 'bower_components/**/*')
];


gulp.task('develop:inject', function() {
  watch(dest, batch(function() {
    gulp
      .src(layout)
      .pipe(wiredep({
        directory: bowerSrc,
        exclude: []
      }))
      .pipe(inject(gulp.src(appSrc, {read: false}), {relative: true}))
      .pipe(gulp.dest(dest));
  }))
});


function getLayout() {
  var layout = config.layout;
  var extname = path.extname(layout);
  return join(config.root, config.tmp, layout.replace(extname, '.html'));
}

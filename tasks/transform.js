var path = require('path');
var _    = require('underscore');
var gulp = require('gulp');

var jade = require('gulp-jade');
var sass = require('gulp-sass');

var wiredep = require('wiredep').stream;
var inject  = require('gulp-inject');

var config = require(__dirname + '/config.json');


gulp.task('transform:layout', function() {
  var src  = path.join(__dirname, config.app_dir, config.layout);
  var dest = path.join(__dirname, config.tmp_dir);

  gulp
    .src(src)
    .pipe(jade({pretty: false}))
    .pipe(gulp.dest(dest));
});

gulp.task('transform:layout:inject', function() {
  var layout = config.layout;
  var extname = path.extname(layout);
  layout = layout.replace(extname, '.html');

  var src  = path.join(__dirname, config.tmp_dir, layout);
  var bowerSrc  = path.join(__dirname, config.tmp_dir, 'bower_components');
  var injectSrc = [
    path.join(__dirname, config.tmp_dir, '**/*.css'),
    path.join(__dirname, config.tmp_dir, '**/*.js'),
    path.join('!', __dirname, config.tmp_dir, 'bower_components/**/*')
  ]
  var dest = path.join(__dirname, config.tmp_dir);

  gulp
    .src(src)
    .pipe(wiredep({
      directory: bowerSrc,
      exclude: []
    }))
    .pipe(inject(gulp.src(injectSrc, {read: false})))
    .pipe(gulp.dest(dest));
});


gulp.task('transform:templates', function() {
  if (!_.isArray(config.templates)) {
    config.templates = [config.templates]
  }

  var src = _.map(config.templates, function(filepath) {
    return path.join(__dirname, config.app_dir, filepath)
  });
  var dest = path.join(__dirname, config.tmp_dir);

  gulp
    .src(src)
    .pipe(jade())
    .pipe(gulp.dest(dest));
});


gulp.task('transform:scripts', function() {
  if (!_.isArray(config.scripts)) {
    config.scripts = [config.scripts]
  }

  var src = _.map(config.scripts, function(filepath) {
    return path.join(__dirname, config.app_dir, filepath)
  });
  var dest = path.join(__dirname, config.tmp_dir);

  gulp.src(src).pipe(gulp.dest(dest));
});


gulp.task('transform:styles', function() {
  if (!_.isArray(config.styles)) {
    config.styles = [config.styles]
  }

  var src = _.map(config.styles, function(filepath) {
    return path.join(__dirname, config.app_dir, filepath)
  });
  var dest = path.join(__dirname, config.tmp_dir);

  gulp
    .src(src)
    .pipe(sass())
    .pipe(gulp.dest(dest));
});


gulp.task('transform:bower', function() {
  var src  = path.join(__dirname, config.app_dir, 'bower_components', '**/*');
  var dest = path.join(__dirname, config.tmp_dir, 'bower_components');

  gulp.src(src).pipe(gulp.dest(dest));
});

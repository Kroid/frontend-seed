var path = require('path');
var _    = require('underscore');

var gulp = require('gulp');
var jade = require('gulp-jade');
var sass = require('gulp-sass');

var config = require(__dirname + '/config.json');


gulp.task('transform:layout', function() {
  var src  = path.join(__dirname, config.app_dir, config.layout);
  var dest = path.join(__dirname, config.tmp_dir);

  gulp
    .src(src)
    .pipe(jade())
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

  gulp
    .src(src)
    .pipe(gulp.dest(dest));
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

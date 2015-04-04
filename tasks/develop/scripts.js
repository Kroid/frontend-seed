var gulp   = require('gulp');
var jshint = require('gulp-jshint');
var watch  = require('gulp-watch');

var src  = join(config.root, config.app, config.scripts);
var dest = join(config.root, config.tmp);


gulp.task('develop:scripts', function() {
  gulp
    .src(src)
    .pipe(watch(src))
    .pipe(jshint())
    .pipe(gulp.dest(dest));
});

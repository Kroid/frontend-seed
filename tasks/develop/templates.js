var gulp   = require('gulp');
var jade = require('gulp-jade');
var watch  = require('gulp-watch');

var src  = join(config.root, config.app, config.templates);
var dest = join(config.root, config.tmp);


gulp.task('develop:templates', function() {
  gulp
    .src(src)
    .pipe(watch(src))
    .pipe(jade())
    .pipe(gulp.dest(dest));
});

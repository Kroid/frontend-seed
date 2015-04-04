var gulp  = require('gulp');
var jade  = require('gulp-jade')
var watch = require('gulp-watch');

var src  = join(config.root, config.app, config.layout);
var dest = join(config.root, config.tmp);


gulp.task('develop:layout', function() {
  gulp
    .src(src)
    .pipe(watch(src))
    .pipe(jade({pretty: false}))
    .pipe(gulp.dest(dest));
});

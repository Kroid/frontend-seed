var path = require('path');

var gulp = require('gulp');
var clean = require('gulp-clean');

var config  = require(__dirname + '/config.json');
var tmp_dir = path.join(__dirname, config.tmp_dir);


gulp.task('clean', function() {
  gulp
    .src(tmp_dir, {read: false})
    .pipe(clean());
});

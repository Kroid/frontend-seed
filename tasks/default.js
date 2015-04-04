var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', ['clean'], function() {
  runSequence(
    [
      'develop:bower',
      'develop:layout',
      'develop:scripts',
      'develop:styles',
      'develop:templates',
    ],
    'develop:inject',
    'develop:serve'
  )
});

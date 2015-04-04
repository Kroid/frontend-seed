var gulp   = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var watch  = require('gulp-watch');

var src  = join(config.root, config.app, config.styles);
var dest = join(config.root, config.tmp);


gulp.task('develop:styles', function() {
  gulp
    .src(src)
    .pipe(watch(src))
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer({browsers: ['last 2 versions']}))
    .pipe(plumber.stop())
    .pipe(gulp.dest(dest));
});

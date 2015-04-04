var path = require('path');
var _ = require('underscore');


global.config = {
  root: __dirname,
  app: 'app',
  tmp: 'tmp',
  dst: 'dist',
  layout: 'index.jade',
  scripts: [
    '**/*.js',
    '!**/*_test.js'
  ],
  styles: 'app.scss',
  templates: [
    '**/*.jade',
    '!index.jade'
  ]
};


global.gulp = require('gulp');
global.join = function() {
  var _path = '';
  var arr = null;

  _.each(arguments, function(arg) {
    if (_.isArray(arg)) {
      return arr = arg;
    }
    _path = path.join(_path, arg);
  });

  if(arr) {
    return _.map(arr, function(ele) {
      return prepare(path.join(_path,ele));
    })
  }

  return prepare(_path);

  function prepare(raw) {
    var negative;
    if (raw.indexOf('!') != -1) {
      negative = true;
    }
    raw = raw.replace(/!/g, '');
    if (negative){
      raw = '!' + raw;
    }
    return raw;
  }
};


require('require-dir')('./tasks', {recurse: true});

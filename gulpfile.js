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
  styles: '**/app.scss',
  templates: [
    '**/*.jade',
    '!index.jade'
  ]
};

global.gulp = require('gulp');
global.path = require('path');

require('require-dir')('./tasks', {recurse: true});

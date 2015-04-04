var gulp = require('gulp');
var serve = require('gulp-serve');
var httpProxy = require('http-proxy');
var modRewrite = require('connect-modrewrite');

var proxy = httpProxy.createProxyServer({ target: process.env.proxy });
proxy.on('error', function(err, req, res) {
  console.log(err);
  res.end();
})

gulp.task('develop:serve', serve({
  root: join(config.root, config.tmp),
  port: process.env.port || 3001,
  middlewares: [
    function(req, res, next) {
      if (req.url.indexOf('/api/') === 0) {
        // req.headers.host = process.env.proxy;
        proxy.web(req, res);
      } else {
        next();
      }
    },
    modRewrite([ '!\\.\\w+$ /index.html [L]' ])
  ]
}));

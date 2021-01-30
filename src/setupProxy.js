const proxy = require('http-proxy-middleware');
module.exports = function expressMiddleware(app) {
  app.use(
    proxy(['/v1', '/auth'], {
      target: process.env.REACT_APP_API_URL,
      changeOrigin: true
    })
  );
};

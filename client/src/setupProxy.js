const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/api", "/auth/google","/api1","/api2"],
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
};
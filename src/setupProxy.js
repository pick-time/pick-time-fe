// eslint-disable-next-line import/no-extraneous-dependencies, @typescript-eslint/no-var-requires
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://15.164.225.241", // 실제 API 엔드포인트의 주소로 대체해야 합니다.
      changeOrigin: true,
      pathRewrite: {
        "^/api": "", // 프록시 경로에서 '/api'를 제거합니다.
      },
    }),
  );
};

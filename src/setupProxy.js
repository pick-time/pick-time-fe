/* eslint-disable @typescript-eslint/no-var-requires */
// // eslint-disable-next-line import/no-extraneous-dependencies, @typescript-eslint/no-var-requires, @typescript-eslint/no-var-requires
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api/**", {
      target: "https://api.picktime.store", // 실제 API 엔드포인트의 주소로 대체해야 합니다.
      changeOrigin: true,
      pathRewrite: {
        "^/api": "", // 프록시 경로에서 '/api'를 제거합니다.
      },
    }),
  );
};

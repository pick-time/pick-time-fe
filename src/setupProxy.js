// eslint-disable-next-line import/no-extraneous-dependencies, @typescript-eslint/no-var-requires
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    // "/api",
    createProxyMiddleware("/gift", {
      target: "https://api.picktime.store", // 실제 API 엔드포인트의 주소로 대체해야 합니다.
      changeOrigin: true,
      // pathRewrite: {
      //   "^/api": "", // 프록시 경로에서 '/api'를 제거합니다.
      // },
    }),
  );
  // 이거다!!
  // app.use(
  //   "/scrape",
  //   createProxyMiddleware({
  //     target: "http://localhost:5050",
  //     changeOrigin: true,
  //   }),
  // );
  //
  // 배포 세팅
  app.use(
    "/scrape",
    createProxyMiddleware({
      target: "https://political-olive-radio.glitch.me",
      changeOrigin: true,
    }),
  );
  //
};

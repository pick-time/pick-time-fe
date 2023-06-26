import urlPattern from "./urlPattern";

const validateUrl = (url: string) => {
  if (url.length === 0) {
    return "상품 url을 입력해주세요.";
  }

  if (!urlPattern.test(url)) {
    return "유효한 url을 입력해주세요.";
  }

  return "";
};

export default validateUrl;

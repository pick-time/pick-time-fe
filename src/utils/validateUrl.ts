import urlPattern from "./urlPattern";

const validateUrl = (url: string) => {
  if (url === "") {
    // setUrlError("상품 url을 입력해주세요.");
    return true;
  }

  if (!urlPattern.test(url)) {
    // setUrlError("유효한 url을 입력해주세요.");
    return true;
  }

  return false;
};

export default validateUrl;

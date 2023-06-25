import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Icon from "components/common/Icon";
import { useRecoilState } from "recoil";
import { urlResponseState } from "stores/atom";
import axios from "axios";

const urlPattern = new RegExp(
  "^(https?:\\/\\/)?" + // validate protocol
    "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
    "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
    "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
    "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
    "(\\#[-a-z\\d_]*)?$",
  "i",
); // validate fragment locator

export default function ProviderGiftForm() {
  const [url, setUrl] = useState<string>("");
  const [response, setResponse] = useRecoilState(urlResponseState);
  const [urlError, setUrlError] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [result, setResult] = useState(null);

  const handleClearUrl = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const checkUrl = () => {
    if (url === "") {
      setUrlError("상품 url을 입력해주세요.");
      return true;
    }

    if (!urlPattern.test(url)) {
      setUrlError("유효한 url을 입력해주세요.");
      return true;
    }

    return false;
  };

  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (urlError !== "") setUrlError("");
    setUrl(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const onSuccess = () => {
      if (checkUrl()) return;

      const data = {
        key: process.env.REACT_APP_LINKPREVIEW_API_KEY,
        q: url,
      };

      // fetch("https://api.linkpreview.net", {
      //   method: "POST",
      //   mode: "cors",
      //   body: JSON.stringify(data),
      // })
      //   // fetch(`https://rlp-proxy.herokuapp.com/v2?url=${url}`)
      //   .then(res => res.json())
      //   .then(res => {
      //     console.log(res);
      //     setResponse(res);
      //   })
      //   .catch(error => {
      //     console.log("error", error);
      //   });
      axios({
        url: "http://localhost:5000/scrape",
        method: "post",
        data: {
          url,
        },
      }).then(res => {
        console.log(res);
        if (res.statusText === "OK") {
          setResponse({ ...res.data, url });
        }
      });
    };

    if (urlError !== "") {
      setUrlError("");
      onSuccess();
    } else {
      onSuccess();
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          ref={inputRef}
          type="text"
          placeholder="링크를 등록해 주세요."
          onChange={handleUrlChange}
        />
        <AddBtn type="submit" onClick={handleClearUrl}>
          <Icon name="cart" width={20} height={20} />
        </AddBtn>
      </form>
      {urlError && <ErrorMsg>{urlError}</ErrorMsg>}
    </>
  );
}

const Input = styled.input`
  width: 250px;
  height: 40px;
  border-radius: 10px;
  background-color: #f9f6ff;
  outline: none;
  border: none;
  padding-left: 5px;
  font-size: 14px;
`;

const AddBtn = styled.button`
  width: 50px;
  height: 40px;
  border-radius: 10px;
  background-color: #584392;
  border: none;
  margin-left: 8px;
`;

const ErrorMsg = styled.p`
  margin-top: 8px;
  font-size: 14px;
`;

import React, { useState, useRef } from "react";
import styled from "styled-components";
import Icon from "components/common/Icon";
import { useRecoilState } from "recoil";
import { urlResponseState } from "stores/atom";
import validateUrl from "utils/validateUrl";
import { postScrapeMetaData } from "api/api";

export default function ProviderGiftForm() {
  const [url, setUrl] = useState<string>("");
  const [, setResponse] = useRecoilState(urlResponseState);

  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (urlError !== "") setUrlError("");
    setUrl(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const onSuccess = async () => {
      if (validateUrl(url)) return;
      // 에러메시지 함수 추가

      // input창 리셋
      inputRef.current!.value = "";

      postScrapeMetaData(url).then(data => setResponse({ ...data, url }));
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
        <AddBtn type="submit">
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

import React, { useState, useRef } from "react";
import styled from "styled-components";
import Icon from "components/common/Icon";
import { useRecoilState } from "recoil";
import { urlResponseState } from "stores/atom";
import validateUrl from "utils/validateUrl";
import { postScrapeMetaData } from "api/api";
import COLOR from "style/color";

export default function ProviderGiftForm() {
  const [url, setUrl] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [response, setResponse] = useRecoilState(urlResponseState);
  const [urlError, setUrlError] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (urlError !== "") setUrlError("");
    setUrl(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const onSuccess = async () => {
      setUrlError(validateUrl(url));
      if (validateUrl(url)) return;

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
      <Form onSubmit={handleSubmit}>
        <Input
          ref={inputRef}
          type="text"
          placeholder="링크를 등록해 주세요."
          onChange={handleUrlChange}
        />
        <AddBtn type="submit">
          <Icon name="cart" width={20} height={20} />
        </AddBtn>
      </Form>
      {urlError && <ErrorMsg>{urlError}</ErrorMsg>}
    </>
  );
}

const Form = styled.form`
  /* margin-bottom: 1.5rem; */
`;
const Input = styled.input`
  width: 25rem;
  height: 4rem;
  border-radius: 10px;
  background-color: #f9f6ff;
  outline: none;
  border: none;
  padding-left: 5px;
  font-size: 14px;
  ::placeholder {
    color: #c3bbdb;
    font-size: 14px;
    font-weight: 500;
    padding-left: 14px;
  }
`;

const AddBtn = styled.button`
  width: 5rem;
  height: 4rem;
  border-radius: 10px;
  background-color: #584392;
  border: none;
  margin-left: 8px;
`;

const ErrorMsg = styled.p`
  margin: 0.5rem 0;
  color: ${COLOR.PINK};
  text-align: center;
`;

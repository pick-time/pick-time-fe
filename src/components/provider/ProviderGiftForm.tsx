import React, { useState, useRef } from "react";
import styled from "styled-components";
import Icon from "components/common/Icon";
import validateUrl from "utils/validateUrl";
import COLOR from "style/color";

// 타입 수정
export default function ProviderGiftForm({ mutate }: any) {
  const [url, setUrl] = useState<string>("");
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

      mutate({ giftUrl: url, targetId: 35 });
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
      <Title>선물 리스트</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          ref={inputRef}
          type="text"
          placeholder="선물 사이트 링크를 등록해 주세요."
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

const Title = styled.div`
  width: 31rem;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 1.1rem;
  text-align: left;
`;

const Form = styled.form`
  margin-bottom: 1rem;
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

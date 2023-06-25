import React, { useState } from "react";
import styled from "styled-components";
import Icon from "components/common/Icon";
import { useRecoilState } from "recoil";
import { urlResponseState } from "stores/atom";

// interface LinkPreviewResponse {
//   author: string | null;
//   date: string | null;
//   title: string | null;
//   description: string | null;
//   image: string | null;
//   logo: string | null;
//   publisher: string | null;
//   url: string | null;
// }

export default function ProviderGiftForm() {
  const [url, setUrl] = useState<string>("");
  const [, setResponse] = useRecoilState(urlResponseState);

  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = {
      key: process.env.REACT_APP_LINKPREVIEW_API_KEY,
      q: url,
    };

    fetch("https://api.linkpreview.net", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(res => {
        // console.log(res);
        setResponse(res);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input id="url-input" type="text" onChange={handleUrlChange} />
      <AddBtn type="submit">
        <Icon name="cart" width={20} height={20} />
      </AddBtn>
    </form>
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
`;

const AddBtn = styled.button`
  width: 50px;
  height: 40px;
  border-radius: 10px;
  background-color: #584392;
  border: none;
  margin-left: 8px;
`;

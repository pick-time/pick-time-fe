import React, { useState } from "react";
import styled from "styled-components";

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

const Input = styled.input`
  width: 250px;
  height: 40px;
  border-radius: 10px;
  background-color: #f9f6ff;
  outline: none;
  border: none;
  padding-left: 5px;
`;

export default function ProviderGiftForm() {
  const [url, setUrl] = useState<string>("");
  const [response, setResponse] = useState();

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
        console.log(res);
        setResponse(res);
      });
  };

  console.log(response);

  return (
    <form onSubmit={handleSubmit}>
      <Input id="url-input" type="text" onChange={handleUrlChange} />
      <button type="submit">제출하기</button>
    </form>
  );
}

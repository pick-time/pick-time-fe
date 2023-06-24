import React, { useState } from "react";

interface LinkPreviewResponse {
  author: string | null;
  date: string | null;
  title: string | null;
  description: string | null;
  image: string | null;
  logo: string | null;
  publisher: string | null;
  url: string | null;
}

export default function Gift() {
  const [url, setUrl] = useState<string>("");
  const [response, setResponse] = useState<LinkPreviewResponse | null>(null);

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

  return (
    <>
      <h1>Gift Page</h1>
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="url-input">url을 입력하세요</label> */}
        <input id="url-input" type="text" onChange={handleUrlChange} />
        <button type="submit">제출하기</button>
        {response && <img src={response.image || ""} alt="이미지" />}
        {response && <h1>{response.title}</h1>}
      </form>
    </>
  );
}

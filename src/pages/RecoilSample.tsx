import React from "react";
import { atom, useRecoilState } from "recoil";

const textState = atom({
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

export default function RecoilSample() {
  const [text, setText] = useRecoilState(textState);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <>
      <input type="text" value={text} onChange={handleOnChange} />
      <h1>{text}</h1>
    </>
  );
}

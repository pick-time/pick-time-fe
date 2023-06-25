import { atom } from "recoil";

export const urlResponseState = atom({
  key: "urlResponseState",
  default: {
    title: "",
    description: "",
    image: "",
    url: "",
  },
});

export const useState = atom({
  key: "useState",
  default: "",
});

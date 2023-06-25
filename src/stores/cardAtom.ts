/* eslint-disable import/prefer-default-export */
import { atom } from "recoil";

export const cardInputState = atom({
  key: "cardInputState",
  default: {
    imgUrl: "",
    cardText: "",
  },
});

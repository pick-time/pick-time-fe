/* eslint-disable import/prefer-default-export */
import { atom, selector } from "recoil";

export const cardInputState = atom({
  key: "cardInputState",
  default: {
    imgUrl: "",
    cardText: "축하합니다",
  },
});

export const imgUrlSelector = selector({
  key: "ImgUrlSelector",
  get: ({ get }) => {
    const { imgUrl } = get(cardInputState);
    return imgUrl;
  },
});

/* eslint-disable import/prefer-default-export */
import { atom, selector } from "recoil";

export const cardInputState = atom({
  key: "cardInputState",
  default: {
    imgUrl: "" as any,
    cardText: "축하합니다",
  },
});

export const FileInputState = atom<File | null>({
  key: "FileInputState",
  default: null,
});

export const imgUrlSelector = selector({
  key: "ImgUrlSelector",
  get: ({ get }) => {
    const { imgUrl } = get(cardInputState);
    return imgUrl;
  },
});

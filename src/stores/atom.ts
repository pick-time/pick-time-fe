import { atom } from "recoil";

export const urlResponseState = atom({
  key: "urlResponseState",
  default: [
    {
      giftDescription: "",
      giftId: 0,
      giftImage: "",
      giftTitle: "",
      giftUrl: "",
    },
  ],
});

export const useState = atom({
  key: "useState",
  default: "",
});

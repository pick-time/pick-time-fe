import { atom } from "recoil";

const couponTextState = atom({
  key: "couponTextState",
  default: "",
});

const couponImageURLState = atom({
  key: "couponImageURLState",
  default: "",
});

const couponInputState = atom({
  key: "couponInputState",
  default: {
    title: "",
    file: null as File | null,
  },
});

export { couponTextState, couponImageURLState, couponInputState };

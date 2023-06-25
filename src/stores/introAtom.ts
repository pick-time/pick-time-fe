import { atom } from "recoil";

export const introInputState = atom({
  key: "introInputState",
  default: {
    type: "",
    providerName: "",
    consumerName: "",
  },
});

export const useState = atom({
  key: "useState1",
  default: "",
});

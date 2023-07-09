/* eslint-disable import/prefer-default-export */
import { atom } from "recoil";

export const targetIdState = atom<number>({
  key: "targetIdState",
  default: 0,
});

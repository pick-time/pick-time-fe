import { CouponList } from "types/couponList.type";
import { GiftList } from "types/giftList.type";

export const getResultIds = (
  giftList: GiftList[],
  couponList: CouponList[],
) => {
  const giftIds = giftList.map(gift => gift.giftId);
  const couponIds = couponList ? couponList.map(coupon => coupon.couponId) : [];
  const allIds = [...giftIds, ...couponIds];
  return allIds;
};

export const pickRandomId = (arr: number[]) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const randomNumber = arr[randomIndex];
  return randomNumber;
};

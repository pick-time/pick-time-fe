import { GiftList } from "./giftList.type";
import { CouponList } from "./couponList.type";

export interface Result {
  giftTotal: number;
  providerName: string;
  consumerName: string;
  giftList: GiftList[];
  couponList: CouponList[];
}

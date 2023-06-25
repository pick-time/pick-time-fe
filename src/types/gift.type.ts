interface Card {
  cardMessage: string;
  cardImage: string;
}

interface Gift {
  id: number;
  originUrl: string;
  giftTitle: string;
  giftImage: string;
  giftDescription: string;
}

interface Coupon {
  id: number;
  couponTitle: string;
  couponImage: string;
}

export interface GiftData {
  target: number;
  providerName: string;
  consumerName: string;
  card: Card;
  gift: Gift[];
  coupon: Coupon[];
}

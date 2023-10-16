export type GetCardInfo = {
  providerName: string;
  cardImageUrl: string;
  cardMessage: string;
};

export type GetFinalResult = {
  consumerName: string;
  finalGift: {
    giftTitle: string;
    giftImageUrl: string;
    giftUrl?: string;
  };
};

export type PostTarget = {
  providerName: string;
  consumerName: string;
};

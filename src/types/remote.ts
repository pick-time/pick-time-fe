export type GetCardInfo = {
  providerName: string;
  cardImageUrl: string;
  cardMessage: string;
};

export type GetTargetInfo = {
  consumerName: string;
  finalGift: {
    giftTitle: string;
    giftImageUrl: string;
  };
};

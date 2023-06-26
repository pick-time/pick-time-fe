export type GetCardInfo = {
  providerName: string;
  cardImageUrl: string;
  cardMeesage: string;
};

export type GetTargetInfo = {
  consumerName: string;
  finalGift: {
    giftTitle: string;
    giftImageUrl: string;
  };
};

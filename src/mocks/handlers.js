import { rest } from "msw";
import { v4 as uuidv4 } from "uuid";

const handlers = [
  rest.get("/provider/gift", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        gift,
      }),
    );
  }),

  rest.post("/provider/gift", (req, res, ctx) => {
    const { title, description } = req.json();

    const uuid = uuidv4();

    return res(ctx.status(201).json({ target: uuid }));
  }),
];

export default handlers;

export const gift = {
  target: 1234,
  providerName: "타몽",
  consumerName: "마크",
  card: {
    cardMessage: "제 마음을 담은 선물이에요",
    cardImage: "base64 string or default image /public/images",
  },
  gift: [
    {
      id: 16723,
      originUrl: "원본 사이트 링크",
      giftTitle: "og태그에서 추출한 타이틀",
      giftImage: "og태그에서 추출한 이미지",
      giftDescription: "og태그에서 추출한 설명",
    },
    {
      id: 121233,
      originUrl: "원본 사이트 링크",
      giftTitle: "og태그에서 추출한 타이틀",
      giftImage: "og태그에서 추출한 이미지",
      giftDescription: "og태그에서 추출한 설명",
    },
    {
      id: 154523,
      originUrl: "원본 사이트 링크",
      giftTitle: "og태그에서 추출한 타이틀",
      giftImage: "og태그에서 추출한 이미지",
      giftDescription: "og태그에서 추출한 설명",
    },
    {
      id: 12333,
      originUrl: "원본 사이트 링크",
      giftTitle: "og태그에서 추출한 타이틀",
      giftImage: "og태그에서 추출한 이미지",
      giftDescription: "og태그에서 추출한 설명",
    },
  ],
  coupon: [
    {
      id: 3324,
      couponTitle: "내가 만든 쿠폰 제목1",
      couponImage: "base64 string2",
    },
    {
      id: 5579,
      couponTitle: "내가 만든 쿠폰 제목1",
      couponImage: "base64 string2",
    },
  ],
};

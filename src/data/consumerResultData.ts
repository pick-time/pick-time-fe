import { GiftList } from "types/giftList.type";

interface ConsumerResult {
  providerName: string;
  consumerName: string;
  giftList: GiftList[];
}
const mockConsumerResult: ConsumerResult = {
  providerName: "mock데이터 주는 사람",
  consumerName: "mock데이터 받는 사람",
  giftList: [
    {
      giftId: 123,
      giftUrl:
        "https://search.shopping.naver.com/catalog/9189323907?query=%ED%96%A5%EC%88%98&NaPm=ct%3Dljbsygag%7Cci%3D1fa4a4c46b1eec228e4b92fc25ad5128ba3d7243%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D8739ded87f2e690b865acefc77f7f918d90be564",
      giftImage:
        "https://shopping-phinf.pstatic.net/main_9189323/9189323907.20210408173258.jpg?type=f640",
      giftTitle: "바이레도 블랑쉬 오 드 퍼퓸",
      giftDescription:
        "종류 : 오 드 퍼퓸메인향 : 플로럴, 머스크사용대상 : 여성용탑노트 : 화이트로즈향, 핑크페퍼향, 알데히드향미들노트 : 바이올렛향, 네롤리향, 작약향베이스노트 : 블론드우드향, 샌들우드향, 머스크향",
    },
    {
      giftId: 124,
      giftUrl:
        "https://search.shopping.naver.com/catalog/2600032275?query=%ED%96%A5%EC%88%98&NaPm=ct%3Dljbu3y48%7Cci%3Ddf2f47626b249c854d63d89feba7de4ca07fbb23%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3De0bcf8713741330056fc0b0340169f2635eb5e20",
      giftImage:
        "https://shopping-phinf.pstatic.net/main_2600032/2600032275.20210527163344.jpg?type=f640",
      giftTitle: "샤넬 코코 마드모아젤 우먼 오 드 퍼퓸",
      giftDescription:
        "종류 : 오 드 퍼퓸메인향 : 플로럴, 오리엔탈사용대상 : 여성용탑노트 : 자스민향, 로즈향미들노트 : 플로랄향베이스노트 : 오리엔탈향",
    },
    {
      giftId: 125,
      giftUrl:
        "https://search.shopping.naver.com/catalog/27614280524?query=%ED%96%A5%EC%88%98&NaPm=ct%3Dljbv4ta0%7Cci%3D969511a74e04425335c0264135ced00008b8dc98%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Daab8a34ab0d5162e2f86fd619f20c2fc32039d1c",
      giftImage:
        "https://shopping-phinf.pstatic.net/main_2761428/27614280524.20210617155322.jpg?type=f640",
      giftTitle: "메종마르지엘라 레이지 선데이 모닝 오 드 뚜왈렛",
      giftDescription:
        "종류 : 오 드 뚜왈렛메인향 : 플로럴머스크타입 : 스프레이사용대상 : 남녀공용주요제품특징 : 향탑노트 : 릴리오브더밸리향미들노트 : 아이리스향베이스노트 : 화이트머스크향, 사향씨향",
    },
  ],
};

export default mockConsumerResult;

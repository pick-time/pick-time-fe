import Button from "components/common/Button";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import COLOR from "style/color";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Kakao: any;
  }
}

const { REACT_APP_JS_KEY } = process.env;
const { Kakao } = window;

export default function KakaoShare() {
  const { targetId } = useParams();
  // TODO: 받는 사람이 볼 인트로 URL로 대체
  const webUrl = `https://pick-time.vercel.app/target/${targetId}`;

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init(REACT_APP_JS_KEY);
  }, []);

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      // TODO: 축하 카드 이미지와 주는 사람 이름 받아와서 대체
      content: {
        title: "정성이 담긴 선물 목록",
        imageUrl: "/assets/images/present-box.png",
        link: { mobileWebUrl: webUrl, webUrl },
      },
      itemContent: {
        titleImageText: "당신에게 마음이 도착했어요.",
        titleImageCategory: "원하는 선물을 골라주세요!",
      },
    });
  };

  return (
    <div>
      <Button
        text="카카오"
        color={COLOR.PURPLE}
        width="half"
        onClick={shareKakao}
      />
    </div>
  );
}

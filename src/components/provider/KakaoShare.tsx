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

interface KakaoShareProps {
  userType: "consumer" | "provider";
  consumerName?: string;
}

export default function KakaoShare({
  userType,
  consumerName,
}: KakaoShareProps) {
  const { targetId } = useParams();

  const data = {
    consumer: {
      webUrl: `https://pick-time.vercel.app/target/${targetId}`,
      title: "정성이 담긴 선물 목록",
      titleImageText: "당신에게 마음이 도착했어요.",
      titleImageCategory: "당신에게 마음이 도착했어요.",
    },
    provider: {
      webUrl: `https://pick-time.vercel.app/target/${targetId}/gift/final`,
      title: `${consumerName}님이 선택한 선물`,
      titleImageText: `${consumerName}님이 선물을 고르셨어요.`,
      titleImageCategory: `${consumerName}님이 고르신 선물을 확인해주세요!`,
    },
  };

  const { webUrl, title, titleImageText, titleImageCategory } = data[userType];

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init(REACT_APP_JS_KEY);
  }, []);

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title,
        imageUrl: "https://ifh.cc/g/p5Mz9R.jpg",
        link: { mobileWebUrl: webUrl, webUrl },
      },
      itemContent: { titleImageText, titleImageCategory },
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

import ModalFrameCoupon from "components/common/ModalFrameCoupon";
import Text from "components/common/Text";
import styled from "styled-components";
import CustomButton from "components/provider/coupon/CustomButton";
import COLOR from "style/color";
import Icon from "components/common/Icon";
import {
  couponImageURLState,
  couponInputState,
  couponTextState,
} from "stores/couponAtom";
import { useRecoilState, useResetRecoilState, useSetRecoilState } from "recoil";
import { useCallback, useRef, useState } from "react";
import { toPng } from "html-to-image";
import Loading from "components/common/Loading";
import { useParams } from "react-router-dom";
import useCoupon from "hooks/queries/useCoupon";

const BASIC_IMAGE_GRADIENT = [
  "linear-gradient(133deg, #52ccff 0%, #5448e8 100%)",
  "linear-gradient(133deg, #942CC4 0%, #CE307F 100%)",
  "linear-gradient(135deg, #1C499B 0%, #544BD9 100%)",
  "linear-gradient(133deg, #7E2BB3 0%, #4C4AD6 100%)",
  "linear-gradient(133deg, #49F4EE 0%, #A7C0FE 100%)",
  "linear-gradient(133deg, #D71659 0%, #FF4732 100%)",
];

interface CreateCouponModalProps {
  setCloseCouponModal: () => void;
}

function CreateCouponModal({ setCloseCouponModal }: CreateCouponModalProps) {
  const { targetId } = useParams();
  const couponPreviewRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [backImageURL, setBackImageURL] = useState<string>(
    BASIC_IMAGE_GRADIENT[0],
  );
  const [backImageCustomURL, setBackImageCustomURL] = useState<string>("");
  const [couponMessage, setCouponMessage] = useRecoilState(couponTextState);
  const [inputInfo, setInputInfo] = useRecoilState(couponInputState);
  const setCouponPreviewImageURL = useSetRecoilState(couponImageURLState);
  const resetCouponInput = useResetRecoilState(couponInputState);
  const resetCouponText = useResetRecoilState(couponTextState);
  const resetCouponImageURL = useResetRecoilState(couponImageURLState);

  const onChangeCouponMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCouponMessage(e.target.value);
  };
  const { addCoupon } = useCoupon(Number(targetId));

  const onClickSubmit = async (png: string) => {
    const formData = new FormData();
    const randomId = (): string => {
      const uint32 = window.crypto.getRandomValues(new Uint32Array(1))[0];
      return uint32.toString(16);
    };
    await fetch(png)
      .then(res => res.blob())
      .then(blob => {
        const file = new File([blob], `custom-coupon-${randomId()}.png`, {
          type: "image/png",
        });
        formData.append("file", file);
      });

    addCoupon.mutate({ couponForm: formData, targetId: Number(targetId) });
  };

  const onClickCouponToPNG = useCallback(async () => {
    if (couponPreviewRef.current) {
      setIsLoading(true);
      const data = await toPng(couponPreviewRef.current);

      await onClickSubmit(data);
      setCouponPreviewImageURL(data);
      setIsLoading(false);

      setCloseCouponModal();

      resetCouponText();
      resetCouponInput();
      resetCouponImageURL();
    }
  }, [couponPreviewRef.current]);

  const onClickImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      const imageUrl = URL.createObjectURL(file);

      setBackImageCustomURL(imageUrl); // 이미지 화면에 렌더링 하기
      setInputInfo({ ...inputInfo, file }); // 전역 상태에 저장
    }
  };

  return (
    <ModalFrameCoupon setCloseCreateModal={setCloseCouponModal}>
      {isLoading && <Loading />}
      <Text
        contents="나만의 쿠폰을 만들어주세요"
        fontSize="1.8rem"
        fontWeight={700}
      />
      {backImageCustomURL.length !== 0 ? (
        <CouponCustomPreview
          ref={couponPreviewRef}
          backgroundURL={backImageCustomURL}
        >
          <CouponMessage>{couponMessage}</CouponMessage>
          COUPON
        </CouponCustomPreview>
      ) : (
        <CouponPreview ref={couponPreviewRef} backgroundURL={backImageURL}>
          <CouponMessage>{couponMessage}</CouponMessage>
          COUPON
        </CouponPreview>
      )}

      <CouponBasicSlider>
        {BASIC_IMAGE_GRADIENT.map((basic, idx) => {
          return (
            <BasicImage
              key={BASIC_IMAGE_GRADIENT[idx]}
              background={basic}
              onClick={() => setBackImageURL(basic)}
            />
          );
        })}
      </CouponBasicSlider>
      <ImageUploadLabel htmlFor="couponImage">
        <input
          type="file"
          id="couponImage"
          accept="image/*"
          onChange={onClickImageUpload}
          style={{ display: "none" }}
        />
        <Icon width={24} height={24} name="camera-stroke" />
        이미지 불러오기
      </ImageUploadLabel>
      <CouponMessageWrapper>
        <CouponMessageTitle>
          쿠폰 메시지 <span style={{ color: "red" }}>*</span>
        </CouponMessageTitle>
        <MessageInput
          maxLength={10}
          onChange={e => onChangeCouponMessage(e)}
          value={couponMessage}
        />
      </CouponMessageWrapper>
      <CustomButton onClick={onClickCouponToPNG} />
    </ModalFrameCoupon>
  );
}

export default CreateCouponModal;

const CouponPreview = styled.div<{ backgroundURL: string }>`
  width: 25.8rem;
  height: 12.4rem;
  border-radius: 8px;
  background: ${({ backgroundURL }) => backgroundURL};

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${COLOR.WHITE};
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
`;

const CouponCustomPreview = styled.div<{ backgroundURL: string }>`
  width: 25.8rem;
  height: 12.4rem;
  border-radius: 8px;
  background-image: ${({ backgroundURL }) => `url(${backgroundURL})`};
  background-size: 25.8rem 12.4rem;

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${COLOR.WHITE};
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
`;

const CouponMessage = styled.span``;

const CouponBasicSlider = styled.div`
  width: 25.8rem;
  height: 3rem;
  display: flex;
  overflow: scroll;
  position: relative;
`;

const BasicImage = styled.img<{ background: string }>`
  width: 6.1rem;
  height: 3rem;
  cursor: pointer;
  border-radius: 0.8rem;
  background: ${({ background }) => background};
`;

const ImageUploadLabel = styled.label`
  width: 26rem;
  height: 4rem;
  border-radius: 1rem;
  border: 0.1rem solid #eee;
  background-color: ${COLOR.WHITE};

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 0.4rem;
`;

const CouponMessageWrapper = styled.div``;

const CouponMessageTitle = styled.p`
  white-space: pre-line;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: normal;
`;

const MessageInput = styled.input`
  width: 26.2rem;
  height: 2.4rem;

  background: none;
  border: none;
  border-radius: 0;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  border-bottom: 1px solid ${COLOR.PLACEHOLDER_PURPLE};
`;

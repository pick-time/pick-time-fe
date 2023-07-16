/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-array-index-key */
import ModalFrameCoupon from "components/common/ModalFrameCoupon";
import Text from "components/common/Text";
import styled from "styled-components";
import CustomButton from "components/provider/coupon/CustomButton";
import COLOR from "style/color";
import Icon from "components/common/Icon";
import { couponInputState, couponTextState } from "stores/couponAtom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useCallback, useRef, useState } from "react";
import { toPng } from "html-to-image";
import Loading from "components/common/Loading";

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
  const couponPreviewRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [previewImageURL, setPreviewImageURL] = useState<string>("");
  // const [backImageFile, setBackImageFile] = useState<File | null>(null);
  const [backImageURL, setBackImageURL] = useState<string>(
    BASIC_IMAGE_GRADIENT[0],
  );
  const [backImageCustomURL, setBackImageCustomURL] = useState<string>("");
  const [couponMessage, setCouponMessage] = useRecoilState(couponTextState);
  const [inputInfo, setInputInfo] = useRecoilState(couponInputState);

  const onChangeCouponMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCouponMessage(e.target.value);
  };

  const onClickCouponToPNG = useCallback(async () => {
    if (couponPreviewRef.current) {
      setIsLoading(true);
      const data = await toPng(couponPreviewRef.current);
      setPreviewImageURL(data);
      setIsLoading(false);
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
              key={idx}
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
        <Text contents="쿠폰 메시지" fontSize="1.2rem" fontWeight={500} />
        <MessageInput
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

  /* ${({ backgroundURL }) =>
    backgroundURL != null
      ? `background-image: url(${backgroundURL})`
      : `background: linear-gradient(133deg, #52ccff 0%, #5448e8 100%)`} */
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
`;

const CouponMessageWrapper = styled.div``;

const MessageInput = styled.input`
  width: 26.2rem;
  height: 2.4rem;
`;

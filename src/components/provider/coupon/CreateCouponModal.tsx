/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-array-index-key */
import ModalFrameCoupon from "components/common/ModalFrameCoupon";
import Text from "components/common/Text";
import styled from "styled-components";
import CustomButton from "components/provider/coupon/CustomButton";
import COLOR from "style/color";
import Icon from "components/common/Icon";
import couponTextState from "stores/couponAtom";
import { useRecoilState } from "recoil";

const BASIC_IMAGE_GRADIENT = [
  "linear-gradient(133deg, #52ccff 0%, #5448e8 100%)",
  "linear-gradient(133deg, #942CC4 0%, #CE307F 100%)",
  "linear-gradient(135deg, #1C499B 0%, #544BD9 100%)",
  "linear-gradient(133deg, #7E2BB3 0%, #4C4AD6 100%)",
  "linear-gradient(133deg, #49F4EE 0%, #A7C0FE 100%)",
  "linear-gradient(133deg, #D71659 0%, #FF4732 100%)",
];

function CreateCouponModal() {
  const [couponMessage, setCouponMessage] = useRecoilState(couponTextState);

  const onChangeCouponMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCouponMessage(e.target.value);
  };
  return (
    <ModalFrameCoupon setCloseCreateModal={() => console.log("hi")}>
      <Text
        contents="나만의 쿠폰을 만들어주세요"
        fontSize="1.8rem"
        fontWeight={700}
      />
      <CouponPreview>
        <CouponMessage>{couponMessage}</CouponMessage>
        COUPON
      </CouponPreview>
      <CouponBasicSlider>
        {BASIC_IMAGE_GRADIENT.map((basic, idx) => {
          return <BasicImage key={idx} background={basic} />;
        })}
      </CouponBasicSlider>
      <ImageUploadButton>
        <Icon width={24} height={24} name="camera-stroke" />
        이미지 불러오기
      </ImageUploadButton>
      <CouponMessageWrapper>
        <Text contents="쿠폰 메시지" fontSize="1.2rem" fontWeight={500} />
        <MessageInput
          onChange={e => onChangeCouponMessage(e)}
          value={couponMessage}
        />
      </CouponMessageWrapper>
      <CustomButton />
    </ModalFrameCoupon>
  );
}

export default CreateCouponModal;

const CouponPreview = styled.div`
  width: 25.8rem;
  height: 12.4rem;
  border-radius: 8px;
  background: linear-gradient(133deg, #52ccff 0%, #5448e8 100%);

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

const ImageUploadButton = styled.button`
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

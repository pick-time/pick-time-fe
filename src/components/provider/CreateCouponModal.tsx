import ModalFrameCoupon from "components/common/ModalFrameCoupon";

function CreateCouponModal() {
  return (
    <ModalFrameCoupon setCloseCreateModal={() => console.log("hi")}>
      <span>나만의 쿠폰을 만들어주세요</span>
    </ModalFrameCoupon>
  );
}

export default CreateCouponModal;

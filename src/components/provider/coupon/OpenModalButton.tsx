import { useState } from "react";
import CustomButton from "components/provider/coupon/CustomButton";
import CreateCouponModal from "components/provider/coupon/CreateCouponModal";

function OpenModalButton() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [openCouponModal, setOpenCouponModal] = useState<boolean>(false);

  const onClickOpenModal = () => {
    setOpenCouponModal(true);
  };
  const onClickCloseModal = () => {
    setOpenCouponModal(false);
  };
  return (
    <>
      <CustomButton onClick={onClickOpenModal} />
      {openCouponModal && (
        <CreateCouponModal setCloseCouponModal={onClickCloseModal} />
      )}
    </>
  );
}

export default OpenModalButton;

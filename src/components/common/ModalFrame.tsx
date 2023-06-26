import React, { useState } from "react";
import ModalPortal from "./ModalPortal";
import styled from "styled-components";
import Icon from "./Icon";

type Props = {
  children: React.ReactNode;
  openEditModal: number | undefined;
  setOpenEditModal: (state: number | undefined) => void;
};

const ModalFrame: React.FC<Props> = ({
  children,
  openEditModal,
  setOpenEditModal,
}: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [openModal, setOpenModal] = useState(false);
  const handleClose = () => {
    setOpenModal(false);
    setOpenEditModal(undefined);
  };
  return (
    <>
      {openEditModal !== undefined ? (
        <ModalPortal>
          <ModalDim onClick={handleClose} />
          <Wrapper>
            <CloseBtn onClick={handleClose}>
              <Icon name="close" width={10} height={10} />
            </CloseBtn>
            {children}
          </Wrapper>
        </ModalPortal>
      ) : (
        <></>
      )}
    </>
  );
};

export default ModalFrame;

const ModalDim = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #00000066;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 390px;
  height: 100vh;
`;
const Wrapper = styled.div`
  position: absolute;
  bottom: 12rem;
  left: calc(50% - 15.5rem);
  /* margin-top: 12rem; */
  background-color: #fff;
  width: 31rem;
  height: 48rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.8rem;
`;
const CloseBtn = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
`;

import React from "react";
import ModalPortal from "./ModalPortal";
import styled from "styled-components";
import Icon from "./Icon";

interface Props {
  children: React.ReactNode;
  setCloseCreateModal: () => void;
}

function ModalFrameCoupon({ children, setCloseCreateModal }: Props) {
  return (
    <ModalPortal>
      <ModalDim onClick={setCloseCreateModal} />
      <Wrapper>
        <CloseBtn onClick={setCloseCreateModal}>
          <Icon name="close" width={10} height={10} />
        </CloseBtn>
        {children}
      </Wrapper>
    </ModalPortal>
  );
}

export default ModalFrameCoupon;

const ModalDim = styled.div`
  position: absolute;
  z-index: 2;
  top: -2rem;
  left: 0;
  background-color: #00000066;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 110%;
`;
const Wrapper = styled.div`
  position: absolute;
  z-index: 2;
  top: 20rem;
  left: calc(50% - 15.5rem);
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

import styled from "styled-components";
import Icon from "./Icon";
import COLOR from "style/color";

interface HeaderWithButtonProps {
  onClickBackBtn: () => void;
  onClickCompleteBtn?: () => void;
  completeBtnDisabled?: boolean;
}

const HeaderWithButton = ({
  onClickBackBtn,
  onClickCompleteBtn,
  completeBtnDisabled,
}: HeaderWithButtonProps) => {
  return (
    <LogoWrapper>
      <IconButton onClick={onClickBackBtn}>
        <Icon name="left-arrow" width={24} height={24} />
      </IconButton>
      <Icon name="logo-header" width={113} height={26} />
      {onClickCompleteBtn && (
        <CompleteButton
          onClick={onClickCompleteBtn}
          disabled={completeBtnDisabled}
        >
          완료
        </CompleteButton>
      )}
    </LogoWrapper>
  );
};

export default HeaderWithButton;

const LogoWrapper = styled.header`
  display: flex;
  width: 68rem;
  align-items: center;
  justify-content: space-around;
  padding: 1rem 12rem;
  background: ${COLOR.WHITE};
  z-index: 1;
`;

const IconButton = styled.button`
  all: unset;
  width: 5.4rem;
`;

const CompleteButton = styled.button`
  all: unset;

  padding: 0.7rem 1.4rem 0.8rem 1.4rem;
  display: inline-flex;
  align-items: flex-start;

  border-radius: 0.8rem;
  background-color: ${COLOR.PURPLE};

  color: ${COLOR.WHITE};
  font-size: 1.4rem;
  font-weight: bold;

  :disabled {
    background-color: #e9d7fe;
  }
`;

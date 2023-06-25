import styled from "styled-components";

interface CardToggleProps {
  toggleType: "basic" | "custom";
  setToggleType: React.Dispatch<React.SetStateAction<"basic" | "custom">>;
}

function CardToggle({ toggleType, setToggleType }: CardToggleProps) {
  const handleToggleChange = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if ((e.target as HTMLButtonElement).name === "basic") {
      setToggleType("basic");
    } else {
      setToggleType("custom");
    }
  };

  return (
    <ToggleBtnWrapper>
      <LeftBtn
        type="button"
        name="basic"
        value={toggleType}
        onClick={handleToggleChange}
        active={toggleType === "basic"}
      >
        축하 기본 이미지
      </LeftBtn>
      <RightBtn
        type="button"
        name="custom"
        value={toggleType}
        onClick={handleToggleChange}
        active={toggleType === "custom"}
      >
        카드 만들기
      </RightBtn>
    </ToggleBtnWrapper>
  );
}

export default CardToggle;

const ToggleBtnWrapper = styled.div`
  width: 31rem;
  height: 4.6rem;
  background: #f9f6ff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5rem;
  margin-top: 3rem;
  outline: none;
`;

const LeftBtn = styled.button<{ active: boolean }>`
  width: 15rem;
  height: 3.6rem;
  border-radius: 5rem;
  font-weight: 700;
  line-height: 2rem;
  background-color: ${props => (props.active ? "#fff" : "#f9f6ff")};
  color: ${props => (props.active ? "#333" : "#C3BBDB")};
  border: none;
`;

const RightBtn = styled(LeftBtn)``;

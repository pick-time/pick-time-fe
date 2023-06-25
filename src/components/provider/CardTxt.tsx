import styled from "styled-components";

interface CardTxtProps {
  cardInp: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function CardTxt({ cardInp, onChange }: CardTxtProps) {
  return (
    <div>
      <CardInput
        type="text"
        value={cardInp}
        placeholder="마음을 전하고 싶은 분에게 메세지를 작성해 보세요!"
        onChange={onChange}
      />
    </div>
  );
}

export default CardTxt;

const CardInput = styled.input`
  width: 31rem;
  height: 8rem;
  margin: 1rem auto 4rem;
  border-radius: 1rem;
  border: 1px solid #ececec;
  padding: 1.2rem 0 0 1.6rem;
  ::placeholder {
    /* padding: 1.2rem 0 0 1.6rem; */
    font-weight: 500;
    font-size: 1.1rem;
    line-height: 1.6rem;
    color: #dfdfdf;
  }
`;

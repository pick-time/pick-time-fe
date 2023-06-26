import styled from "styled-components";

interface CardTxtProps {
  cardInp: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function CardTxt({ cardInp, onChange }: CardTxtProps) {
  return (
    <div>
      <CardInput
        value={cardInp}
        placeholder="마음을 전하고 싶은 분에게 메시지를 작성해 보세요!"
        onChange={onChange}
      />
    </div>
  );
}

export default CardTxt;

const CardInput = styled.textarea`
  width: 31rem;
  height: 8rem;
  margin: 1rem auto 4rem;
  border-radius: 1rem;
  border: 1px solid #ececec;
  padding: 1.2rem 6rem 0 1.5rem;
  ::placeholder {
    padding: 1.2rem 6rem 0 1.5rem;
    font-weight: 500;
    color: #dfdfdf;
  }
`;

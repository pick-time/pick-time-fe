import styled from "styled-components";

interface CardTxtProps {
  cardInp: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

function CardTxt({ cardInp, onChange, placeholder }: CardTxtProps) {
  return (
    <div>
      <CardInput
        type="text"
        value={cardInp}
        placeholder={placeholder}
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

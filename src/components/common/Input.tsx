import styled from "styled-components";

interface InputProps {
  placeholder: string;
  align: "center" | "left";
  value?: string;
  maxLength?: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * @example
 * <Input
    value={value}
    align="center"
    placeholder="주는 사람"
    onChange={handleChange}
  />
 */
export default function Input({
  placeholder,
  align,
  value = "",
  maxLength = 10,
  onChange,
}: InputProps) {
  return (
    <StyledInput
      type="text"
      placeholder={placeholder}
      style={{ ...INPUT_STYLES[align] }}
      align={align}
      value={value}
      maxLength={maxLength}
      onChange={onChange}
    />
  );
}

const INPUT_STYLES = {
  center: { height: "4.6rem", fontSize: "1.8rem" },
  left: { height: "4rem", fontSize: "1.4rem" },
};

const StyledInput = styled.input<{ align: string }>`
  width: 100%;
  padding: 1rem 1.4rem 1rem 1.4rem;
  border: none;
  border-radius: 1rem;
  outline: none;
  background-color: #f9f6ff;
  font-weight: 500;
  text-align: ${({ align }) => align};

  &::placeholder {
    color: #c3bbdb;
  }
`;

import styled from "styled-components";

interface InputProps {
  placeholder: string;
  align: "center" | "left";
  value?: string;
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
  onChange,
}: InputProps) {
  return (
    <StyledInput
      type="text"
      placeholder={placeholder}
      style={{ ...INPUT_STYLES[align] }}
      value={value}
      onChange={onChange}
    />
  );
}

const INPUT_STYLES = {
  center: {
    height: "4.6rem",
    fontSize: "1.8rem",
    align: "center",
  },
  left: {
    height: "4rem",
    fontSize: "1.4rem",
    align: "left",
  },
};

const StyledInput = styled.input`
  width: 100%;
  padding: 1rem 0 1rem 1.4rem;
  border: none;
  border-radius: 1rem;
  outline: none;
  background-color: #f9f6ff;
  font-weight: 500;

  &::placeholder {
    color: #c3bbdb;
  }
`;

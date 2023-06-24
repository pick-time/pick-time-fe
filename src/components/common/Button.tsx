import styled, { css } from "styled-components";

interface ButtonProps {
  type: "button" | "submit";
  text: string;
  color: "pink" | "purple" | "navy";
  width: "full" | "half";
  isDisabled?: boolean;
  onClick: () => void;
}

export default function Button(props: ButtonProps) {
  const { type, text, color, width, isDisabled, onClick } = props;

  return (
    <StyledButton
      type={type}
      color={BUTTON_COLOR[color]}
      width={BUTTON_WIDTH[width]}
      disabled={isDisabled}
      onClick={onClick}
    >
      {text}
    </StyledButton>
  );
}

const BUTTON_WIDTH = {
  full: "30.8rem",
  half: "14.9rem",
};

const BUTTON_COLOR = {
  pink: "#E362A3",
  purple: "#584392",
  navy: "#24105E",
};

const StyledButton = styled.button<{
  width: string;
  color: string;
  disabled?: boolean;
}>`
  width: ${({ width }) => width};
  height: 4.6rem;
  padding: 1rem;
  border: none;
  border-radius: 10rem;
  background-color: ${({ color }) => color};
  color: white;
  font-weight: 700;
  font-size: 1.8rem;

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.4;
    `};
`;

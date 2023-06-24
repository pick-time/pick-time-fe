import styled, { css } from "styled-components";

interface ButtonProps {
  type?: "button" | "submit";
  text: string;
  color: string;
  width: "full" | "half";
  isDisabled?: boolean;
  onClick: () => void;
}

/**
 * @example
 * <Button text="완료" color={COLOR.NAVY} width="full" onClick={handleClick} />
 */
export default function Button({
  type = "button",
  text,
  color,
  width,
  isDisabled,
  onClick,
}: ButtonProps) {
  return (
    <StyledButton
      type={type}
      color={color}
      width={BUTTON_WIDTH[width]}
      disabled={isDisabled}
      onClick={onClick}
    >
      {text}
    </StyledButton>
  );
}

const BUTTON_WIDTH = { full: "100%", half: "14.9rem" };

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

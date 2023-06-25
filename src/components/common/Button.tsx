import COLOR from "style/color";
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
      bgColor={color}
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
  bgColor: string;
  disabled?: boolean;
}>`
  width: ${({ width }) => width};
  height: 4.6rem;
  padding: 0.8rem 1rem 1.1rem 1rem;
  border: ${({ bgColor }) =>
    bgColor === COLOR.WHITE ? `0.1rem solid ${COLOR.PURPLE}` : "none"};
  border-radius: 10rem;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ bgColor }) => (bgColor === COLOR.WHITE ? COLOR.PURPLE : "white")};
  font-weight: 700;
  font-size: 1.8rem;

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.4;
    `};
`;

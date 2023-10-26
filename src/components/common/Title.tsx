import styled from "styled-components";

interface TitleProps {
  children: React.ReactNode;
  level: 1 | 2;
  align: "left" | "center";
}

/**
 * @example
 * <Title level={1} align="left">
    미키님이 <br />
    <span style={{ color: COLOR.PINK }}>미키님을</span> 위해 생각한
    선물들이에요!
  </Title>
 */
export default function Title({ children, level = 1, align }: TitleProps) {
  const tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <StyledTitle as={tag} size={TITLE_SIZES[level]} align={align}>
      {children}
    </StyledTitle>
  );
}

const TITLE_SIZES = { 1: "1.8rem", 2: "1.8rem" };

const StyledTitle = styled.h1<{ size: string; align: string }>`
  font-size: ${({ size }) => size};
  font-weight: 700;
  text-align: ${({ align }) => align};
`;

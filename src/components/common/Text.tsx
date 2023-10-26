import styled from "styled-components";

export interface TextProps {
  contents: string;
  fontSize?: string;
  fontWeight?: number;
}

/**
 * @example
 * <Text
 *   contents={
 *     "무엇이든 담아서 \n 당신의 소중한 사람에게 마음을 전하세요."
 *   }/>
 */
function Text({ contents, fontSize = "1.6rem", fontWeight = 400 }: TextProps) {
  return (
    <TextWrapper fontSize={fontSize} fontWeight={fontWeight}>
      {contents}
    </TextWrapper>
  );
}

const TextWrapper = styled.p<{ fontSize: string; fontWeight: number }>`
  white-space: pre-line;
  text-align: center;
  font-weight: ${props => props.fontWeight};
  font-size: ${props => props.fontSize};
  line-height: 2.3rem;
`;

export default Text;

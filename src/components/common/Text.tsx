import styled from "styled-components";

export interface TextProps {
  contents: string;
}

/**
 * @example
 * <Text
 *   contents={
 *     "무엇이든 담아서 \n 당신의 소중한 사람에게 마음을 전하세요."
 *   }/>
 */
function Text({ contents }: TextProps) {
  return <TextWrapper>{contents}</TextWrapper>;
}

const TextWrapper = styled.p`
  white-space: pre-line;
  text-align: center;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.3rem;
`;

export default Text;

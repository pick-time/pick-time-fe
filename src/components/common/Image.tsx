interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

/**
 * @example
 * <Image src="/assets/images/card1.png" alt="나만의 카드 이미지" width={10} height={10} />
 */
const Image = ({ src, alt, width, height, ...props }: ImageProps) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <img src={src} alt={alt} width={width} height={height} {...props} />;
};

export default Image;

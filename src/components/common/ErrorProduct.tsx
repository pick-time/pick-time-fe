import styled from "styled-components";
import Icon from "./Icon";

function ErrorProduct() {
  return (
    <ProductPreview>
      <Icon name="error-gift" width={24} height={24} />
    </ProductPreview>
  );
}

export default ErrorProduct;

const ProductPreview = styled.div`
  width: 8.2rem;
  height: 100%;
  border: 0.1rem solid #e6e6e6;
  border-radius: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

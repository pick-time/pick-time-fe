import styled from "styled-components";
import Icon from "./Icon";
import COLOR from "style/color";
import { CouponList as TCouponList } from "types/couponList.type";
import Text from "./Text";

interface ListProps {
  listData: TCouponList[];
  type?: "default" | "editable" | "likable";
  selectedGiftId?: number;

  onClickLike?: (giftId: number) => void;
}

function CouponList({
  listData,
  type = "likable",
  selectedGiftId,
  onClickLike,
}: ListProps) {
  return (
    <ListWrapper>
      {!listData && (
        <TextWrapper>
          <Text contents="등록된 쿠폰이 없습니다" />
        </TextWrapper>
      )}
      {listData &&
        listData.map(ele => {
          const { couponId, couponTitle, couponImage } = ele;
          return (
            <ListItem key={couponId}>
              <ListItemInfoWrapper>
                <ListImage alt={couponTitle} src={couponImage} />
              </ListItemInfoWrapper>
              <ListButtonWrapper>
                {type === "likable" && onClickLike && (
                  <IconButton
                    type="button"
                    onClick={() => onClickLike(couponId)}
                  >
                    {couponId === selectedGiftId ? (
                      <Icon name="fill-heart" width={16} height={14} />
                    ) : (
                      <Icon name="empty-heart" width={16} height={14} />
                    )}
                  </IconButton>
                )}
              </ListButtonWrapper>
            </ListItem>
          );
        })}
    </ListWrapper>
  );
}

export default CouponList;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.6rem;
  margin-bottom: 1.6rem;
`;
const ListItem = styled.div`
  height: 12.4rem;
  width: 30.8rem;
  display: flex;
  background-color: ${COLOR.PLACEHOLDER_PURPLE};
  border-radius: 1rem;

  margin-bottom: 1.6rem;
  justify-content: space-between;
  margin: auto;
`;

const ListItemInfoWrapper = styled.div`
  display: flex;
  width: 20rem;
`;

const ListImage = styled.img`
  width: auto;
  height: 100%;
  border-radius: 1rem;
  margin-right: 0.8rem;
`;

const ListButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 2rem;
  margin: 0.7rem 1rem 0.7rem 0rem;
`;

const IconButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  display: flex;
  align-items: center;
`;

const TextWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

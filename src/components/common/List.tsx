import styled from "styled-components";
import Icon from "./Icon";
import COLOR from "style/color";
import { GiftList } from "types/giftList.type";
import Text from "./Text";

interface ListProps {
  listData: GiftList[];
  type?: "default" | "editable" | "likable";
  selectedGiftId?: number;
  onClickClose?: (giftId: number) => void;
  onClickEdit?: (giftId: number) => void;
  onClickLike?: (giftId: number) => void;
}

function List({
  listData,
  type = "likable",
  selectedGiftId,
  onClickClose,
  onClickEdit,
  onClickLike,
}: ListProps) {
  console.log(listData);
  return (
    <ListWrapper>
      {listData.length === 1 && (
        <TextWrapper>
          <Text contents="등록된 상품이 없습니다" />
        </TextWrapper>
      )}
      {listData &&
        listData.map(ele => {
          const { giftId, giftImage, giftUrl, giftTitle, giftDescription } =
            ele;
          return (
            <ListItem key={giftId}>
              <ListItemInfoWrapper>
                <ListImage alt={giftDescription} src={giftImage} />
                <ListTextWrapper>
                  <ListTitle href={giftUrl}>{giftTitle}</ListTitle>
                  <ListDescription>{giftDescription}</ListDescription>
                </ListTextWrapper>
              </ListItemInfoWrapper>
              <ListButtonWrapper>
                {type === "editable" && (
                  <>
                    {onClickClose && (
                      <IconButton
                        type="button"
                        onClick={() => onClickClose(giftId)}
                      >
                        <Icon name="close" width={10} height={10} />
                      </IconButton>
                    )}
                    {onClickEdit && (
                      <IconButton
                        type="button"
                        onClick={() => onClickEdit(giftId)}
                      >
                        <Icon name="gift-edit" width={20} height={20} />
                      </IconButton>
                    )}
                  </>
                )}
                {type === "likable" && onClickLike && (
                  <IconButton type="button" onClick={() => onClickLike(giftId)}>
                    {giftId === selectedGiftId ? (
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

export default List;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.6rem;
  margin-bottom: 1.6rem;
`;
const ListItem = styled.div`
  height: 9rem;
  width: 31rem;
  display: flex;
  background-color: ${COLOR.WHITE};
  border: 0.1rem solid #e6e6e6;
  border-radius: 1rem;
  padding: 0.4rem;
  margin-bottom: 1.6rem;
  justify-content: space-between;
  margin: auto;
`;

const ListItemInfoWrapper = styled.div`
  display: flex;
  width: 20rem;
`;

const ListTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.1rem;
  color: #333333;
  text-align: left;
  padding-top: 0.7rem;
  width: 18rem;
`;

const ListImage = styled.img`
  width: auto;
  height: 100%;
  border-radius: 1rem;
  margin-right: 0.8rem;
`;

const ListTitle = styled.a`
  overflow: hidden;
  color: #333333;
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  line-height: 1.6rem;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  -webkit-line-clamp: 1;
`;

const ListDescription = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  -webkit-line-clamp: 2;

  line-clamp: 2;
  height: 3rem;
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

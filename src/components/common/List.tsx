import styled from "styled-components";
import Icon from "./Icon";
import COLOR from "style/color";
import { GiftList } from "types/giftList.type";

interface ListProps {
  listData: GiftList[];
  type?: "default" | "editable" | "likable";
  selectedGiftId?: number;
  onClickClose?: () => void;
  onClickEdit?: () => void;
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
  return (
    <div>
      {listData.map(ele => {
        const { giftId, giftImage, giftUrl, giftTitle, giftDescription } = ele;
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
    </div>
  );
}

export default List;

const ListItem = styled.div`
  width: 100%;
  height: 9rem;
  max-width: 31rem;
  display: flex;
  background-color: ${COLOR.WHITE};
  border: 0.1rem solid #e6e6e6;
  border-radius: 1rem;
  padding: 0.4rem;
  margin-bottom: 1.6rem;
  justify-content: space-between;
`;

const ListItemInfoWrapper = styled.div`
  display: flex;
`;

const ListTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.1rem;
  color: #333333;
  text-align: left;
  padding-top: 0.7rem;
`;

const ListImage = styled.img`
  width: auto;
  height: 100%;
  border-radius: 1rem;
  margin-right: 0.8rem;
`;

const ListTitle = styled.a`
  color: #333333;
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  line-height: 1.6rem;
`;

const ListDescription = styled.p`
  white-space: pre-line;
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

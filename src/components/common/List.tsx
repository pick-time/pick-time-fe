import styled from "styled-components";
import Icon from "./Icon";

interface ListData {
  id: number;
  originUrl: string;
  giftImage: string;
  giftTitle: string;
  giftDescription: string;
}

interface ListProps {
  listData: ListData[];
  type?: "default" | "editable" | "likable";
  onClickClose?: () => void;
  onClickEdit?: () => void;
  onClickLike?: () => void;
}

function List({
  listData,
  type = "likable",
  onClickClose,
  onClickEdit,
  onClickLike,
}: ListProps) {
  return (
    <div>
      {listData.map(ele => {
        const { id, originUrl, giftImage, giftTitle, giftDescription } = ele;
        return (
          <ListItem key={id}>
            <ListItemInfoWrapper>
              <ListImage alt={giftDescription} src={giftImage} />
              <ListTextWrapper>
                <ListTitle href={originUrl}>{giftTitle}</ListTitle>
                <ListDescription>{giftDescription}</ListDescription>
              </ListTextWrapper>
            </ListItemInfoWrapper>
            <ListButtonWrapper>
              {type === "editable" && (
                <>
                  <IconButton type="button" onClick={onClickClose}>
                    <Icon name="close" width={10} height={10} />
                  </IconButton>
                  <IconButton type="button" onClick={onClickEdit}>
                    <Icon name="gift-edit" width={20} height={20} />
                  </IconButton>
                </>
              )}
              {type === "likable" && (
                <IconButton type="button" onClick={onClickLike}>
                  <Icon name="empty-heart" width={16} height={14} />
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
  max-width: 38rem;
  display: flex;
  background-color: #ffffff;
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
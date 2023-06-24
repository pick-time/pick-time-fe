import React from "react";
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
  height: 90px;
  max-width: 380px;
  display: flex;
  background-color: #ffffff;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
  padding: 4px;
  margin-bottom: 16px;
  justify-content: space-between;
`;

const ListItemInfoWrapper = styled.div`
  display: flex;
`;

const ListTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 11px;
  color: #333333;
  text-align: left;
  padding-top: 7px;
`;

const ListImage = styled.img`
  width: auto;
  height: 100%;
  border-radius: 10px;
  margin-right: 8px;
`;

const ListTitle = styled.a`
  color: #333333;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 4px;
  line-height: 16px;
`;

const ListDescription = styled.p`
  white-space: pre-line;
`;

const ListButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 20px;
  margin: 7px 10px 7px 0px;
`;

const IconButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  display: flex;
  align-items: center;
`;

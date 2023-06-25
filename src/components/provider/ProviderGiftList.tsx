import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { urlResponseState } from "stores/atom";
import List from "components/common/List";
import { GiftList } from "types/giftList.type";

interface ResponseData {
  title: string;
  description: string;
  image: string;
  url: string;
}

export default function ProviderGiftList() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [response, setResponse] =
    useRecoilState<ResponseData>(urlResponseState);
  const [listData, setListData] = useState<GiftList[] | undefined>(undefined);

  useEffect(() => {
    if (response.title !== "") {
      const newData: GiftList = {
        giftId: new Date().getTime(),
        giftUrl: response.url,
        giftImage: response.image,
        giftTitle: response.title,
        giftDescription: response.description,
      };
      setListData(prevListData =>
        prevListData ? [...prevListData, newData] : [newData],
      );
    }
  }, [response]);

  return <>{listData && <List listData={listData} />}</>;
}

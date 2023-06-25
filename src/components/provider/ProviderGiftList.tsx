import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { urlResponseState } from "stores/atom";
import List from "components/common/List";

interface ResponseData {
  title: string;
  description: string;
  image: string;
  url: string;
}

interface ListData {
  id: number;
  originUrl: string;
  giftImage: string;
  giftTitle: string;
  giftDescription: string;
}

export default function ProviderGiftList() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [response, setResponse] =
    useRecoilState<ResponseData>(urlResponseState);
  const [listData, setListData] = useState<ListData[] | undefined>(undefined);

  useEffect(() => {
    if (response.title !== "") {
      const newData: ListData = {
        id: new Date().getTime(),
        originUrl: response.url,
        giftImage: response.image,
        giftTitle: response.title,
        giftDescription: response.description,
      };
      setListData(prevListData =>
        prevListData ? [...prevListData, newData] : [newData],
      );
      console.log(newData.id);
    }
  }, [response]);

  return <>{listData && <List listData={listData} />}</>;
}

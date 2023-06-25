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
  const [response, setResponse] =
    useRecoilState<ResponseData>(urlResponseState);
  const [listData, setListData] = useState<ListData[] | undefined>(undefined);
  const [id, setId] = useState(1);

  console.log(response);

  useEffect(() => {
    if (response.title !== "") {
      const newData: ListData = {
        id,
        originUrl: response.url,
        giftImage: response.image,
        giftTitle: response.title,
        giftDescription: response.description,
      };
      setListData(prevListData =>
        prevListData ? [...prevListData, newData] : [newData],
      );
      setId(prev => prev + 1);
    }
  }, [response]);

  return <>{listData && <List listData={listData} />}</>;
}

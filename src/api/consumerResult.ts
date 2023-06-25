import axios from "axios";
import { GetTargetInfo } from "types/remote";

const getTargetInfo = async (targetId: number): Promise<GetTargetInfo> => {
  const response = await axios.get(
    `http://15.164.225.241/target/${targetId}/final`,
    {
      params: { targetId },
    },
  );
  return response.data;
};

export default getTargetInfo;

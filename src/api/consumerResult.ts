import axios from "axios";
import { GetTargetInfo } from "types/remote";

const getTargetInfo = async (targetId: number): Promise<GetTargetInfo> => {
  const response = await axios.get(`/target/${targetId}/final`, {
    params: targetId,
  });
  return response.data;
};

export default getTargetInfo;

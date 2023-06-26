import axios from "axios";
import { GetTargetInfo } from "types/remote";

const getTargetInfo = async (targetId: number): Promise<GetTargetInfo> => {
  const response = await axios.get(`/api/target/${targetId}/final`);
  return response.data;
};

export default getTargetInfo;

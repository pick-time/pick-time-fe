import axios from "axios";
import { GetCardInfo, GetTargetInfo } from "types/remote";

export const getCardInfo = async (targetId: number): Promise<GetCardInfo> => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/target/${targetId}`,
  );
  return response.data;
};

export const getTargetInfo = async (
  targetId: number,
): Promise<GetTargetInfo> => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/target/${targetId}/final`,
  );
  return response.data;
};

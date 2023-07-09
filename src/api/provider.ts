import axios from "axios";

interface PostTargetData {
  providerName: string;
  consumerName: string;
}

export const postTarget = async (data: PostTargetData) => {
  console.log("postTarget", data);
  const response = await axios.post("/api/target", data);
  return response.data;
};

export default postTarget;

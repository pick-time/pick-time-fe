import { useNavigate } from "react-router-dom";
import { postTarget } from "api/provider";
import { useMutation } from "react-query";
import { useSetRecoilState } from "recoil";
import { targetIdState } from "stores/giftAtom";

export const usePostTarget = () => {
  const setTargetId = useSetRecoilState(targetIdState);
  const navigate = useNavigate();

  return useMutation(postTarget, {
    onSuccess: data => {
      console.log(data);
      setTargetId(data.tatgetId);
      navigate("/gift");
    },
    onError: error => {
      console.error(error);
    },
  });
};

export default usePostTarget;

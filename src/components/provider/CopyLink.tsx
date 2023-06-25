import Button from "components/common/Button";
import { useLocation } from "react-router-dom";
import COLOR from "style/color";
import CopyToClipboard from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";

export default function CopyLink() {
  // TODO: 배포 URL로 대체
  const baseUrl = "https://pick-time-fe.vercel.app/";
  const location = useLocation();
  const notify = () => toast.success("클립보드에 복사되었습니다.");

  return (
    <>
      <CopyToClipboard text={`${baseUrl}${location.pathname}`} onCopy={notify}>
        <Button text="URL" color={COLOR.NAVY} width="half" />
      </CopyToClipboard>
      <StyledToastContainer
        position="top-right"
        autoClose={1500}
        limit={1}
        hideProgressBar={false}
        theme="light"
      />
    </>
  );
}

const StyledToastContainer = styled(ToastContainer)`
  .Toastify__toast {
    font-size: 16px;
  }
`;

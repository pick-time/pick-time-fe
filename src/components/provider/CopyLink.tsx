import { useLocation } from "react-router-dom";
import CopyToClipboard from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";

interface CopyLinkProps {
  children: React.ReactNode;
}

export default function CopyLink({ children }: CopyLinkProps) {
  // TODO: 배포 URL로 대체
  const baseUrl = "https://pick-time-fe.vercel.app/";
  const location = useLocation();
  const notify = () => toast.success("클립보드에 복사되었습니다.");

  return (
    <div>
      <CopyToClipboard text={`${baseUrl}${location.pathname}`} onCopy={notify}>
        {children}
      </CopyToClipboard>
      <StyledToastContainer
        position="top-right"
        autoClose={1500}
        limit={1}
        hideProgressBar={false}
        pauseOnHover={false}
        theme="light"
      />
    </div>
  );
}

const StyledToastContainer = styled(ToastContainer)`
  .Toastify__toast {
    font-size: 16px;
  }
`;

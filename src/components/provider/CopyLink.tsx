import { useParams } from "react-router-dom";
import CopyToClipboard from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";

interface CopyLinkProps {
  children: React.ReactNode;
}

export default function CopyLink({ children }: CopyLinkProps) {
  const baseUrl = "https://pick-time.vercel.app";
  const notify = () => toast("📋️ 클립보드에 복사되었습니다.");
  const { targetId } = useParams();

  return (
    <div>
      <CopyToClipboard
        text={`${baseUrl}/target/${targetId}/gift/final`}
        onCopy={notify}
      >
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

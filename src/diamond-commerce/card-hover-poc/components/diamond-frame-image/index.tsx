import { useEffect, useRef, useState } from "react";

interface Props {
  fallback: React.ReactNode;
}

export function DiamondFrameImage({ fallback }: Props) {
  const [showIframe, setShowIframe] = useState(false);
  const timeout = useRef<number | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const HOVER_DURATION_IN_MS = 2000;

  const handleMouseEnter = () => {
    if (showIframe === false) {
      timeout.current = setTimeout(
        () => setShowIframe(true),
        HOVER_DURATION_IN_MS
      );
    }
  };

  const handleMouseLeave = () => {
    timeout?.current && clearTimeout(timeout.current);
  };

  return (
    <div
      style={iframeContainerStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showIframe ? (
        <iframe
          ref={iframeRef}
          style={iframeStyle}
          src="https://v3601514.v360.in/vision360.html?d=DMV185-322A&surl=https://v3601514.v360.in/"
          scrolling="no"
        />
      ) : (
        fallback
      )}
    </div>
  );
}

const iframeContainerStyle: React.CSSProperties = {
  position: "relative",
  cursor: "pointer",
  height: "250px",
  overflow: "hidden",
};

const iframeStyle: React.CSSProperties = {
  position: "absolute",
  top: "-25px",
  left: "-50px",
  height: "400px",
  width: "400px",
};

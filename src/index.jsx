import React, { useState, useEffect } from "react";

export default function ScrollToTop({
  showAt = 200,
  smooth = true,
  style = {},
  className = "",
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > showAt);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [showAt]);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: smooth ? "smooth" : "auto",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={handleClick}
      className={className}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        padding: "10px 15px",
        backgroundColor: "#4cafef",
        color: "#fff",
        border: "none",
        borderRadius: "50%",
        cursor: "pointer",
        ...style,
      }}
    >
      ↑
    </button>
  );
}

import React, { useState, useEffect } from "react";

export default function ScrollToTop({
  showAt = 200,
  smooth = true,
  style = {},
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

  const universalStyle = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    padding: "10px 15px",
    backgroundColor: "#1e90ff", // DodgerBlue works in light & dark
    color: "#fff",
    fontSize: "18px",
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
    boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
    transition: "all 0.3s ease",
  };

  return (
    <button
      onClick={handleClick}
      style={{ ...universalStyle, ...style }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0d6efd")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1e90ff")}
    >
      ↑
    </button>
  );
}

import React from "react";
import ScrollToTop from "./ScrollToTop";

export default function App() {
  return (
    <div style={{ height: "2000px", padding: "20px" }}>
      <h1>Scroll Down to See the Button</h1>
      <p>Keep scrolling...</p>

      <ScrollToTop showAt={300} smooth={true} />
    </div>
  );
}

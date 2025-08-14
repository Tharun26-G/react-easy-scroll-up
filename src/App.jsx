import React from "react";
import ScrollToTop from "./index"; // Import from your component file

export default function App() {
  return (
    <div style={{ height: "2000px", padding: "20px" }}>
      <h1>Scroll Down to See the Button</h1>
      <p>Keep scrolling...</p>

      {/* This is the component you will publish */}
      <ScrollToTop showAt={300} smooth={true} />
    </div>
  );
}

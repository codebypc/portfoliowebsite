import React from "react";
import Typewriter from "typewriter-effect";
import "./Work.css"; // Assuming you have a CSS file for additional styling

export const TypingEffect = () => {
  return (
    <div style={{ fontFamily: "'Righteous', sans-serif", fontWeight: "800" }}>
      {/* Wrapped the font name in single quotes */}
      <Typewriter
        options={{
          strings: ["Welcomes You...", "PC Prajapat"],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

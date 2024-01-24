import React from "react";

export default function SectionDivider() {
  return (
    <div className="pt-4 pb-8 flex items-center justify-center w-full h-full bg-transparent">
      <div className="w-[3px] h-[60px] overflow-hidden">
        <div
          className="w-full h-full rounded-full animate-scrolldown"
          style={{
            background: "linear-gradient(to bottom, white 50%, black 50%)",
            backgroundPosition: "0 -60px",
            backgroundSize: "100% 200%",
          }}
        />
      </div>
    </div>
  );
}

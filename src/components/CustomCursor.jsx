import React from "react";
import AnimatedCursor from "react-animated-cursor";

export default function CustomCursor() {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={24}
      innerScale={1}
      outerScale={2}
      outerAlpha={0}
      hasBlendMode={true}
      innerStyle={{
        backgroundColor: "var(--primary-color)",
      }}
      outerStyle={{
        backgroundImage:
          "linear-gradient(to bottom, var(--primary-color), var(--middle-color), var(--secondary-color))",
        mixBlendMode: "multiply",
      }}
      showSystemCursor={false}
      trailingSpeed={8}
      clickables={[
        "a",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        "label[for]",
        "select",
        "textarea",
        "button",
        ".link",
        {
          target: ".custom-cursor-anchor",
          options: {
            innerSize: 12,
            outerSize: 12,
            color: "255, 255, 255",
            outerAlpha: 0.3,
            innerScale: 0.7,
            outerScale: 5,
          },
        },
      ]}
    />
  );
}

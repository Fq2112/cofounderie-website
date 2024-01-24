import React, { useEffect, useState } from "react";
import { titleScroller } from "../../utils/utils";
import Header from "./Header";
import Footer from "./Footer";

export default function Extend({ menu, children, bgWrapper = "bg-white" }) {
  const [isMenuWhite, setIsMenuWhite] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const runScroll = (e) => {
    if (e.target.scrollTop !== scrollTop) {
      setScrollTop(e.target.scrollTop);
    }
  };

  useEffect(() => {
    setIsMenuWhite(scrollTop > 38);
  }, [scrollTop]);

  useEffect(() => titleScroller(menu), [menu]);

  return (
    <div
      id="wrapper"
      className={`w-full h-screen overflow-y-auto ${bgWrapper}`}
      onScroll={runScroll}
    >
      <Header isMenuWhite={isMenuWhite} />

      {children}

      <Footer />
    </div>
  );
}

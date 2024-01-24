import React, { useEffect, useRef, useState } from "react";
import { titleScroller } from "../../utils/utils";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "../Navbar";

export default function Extend({ menu, children, bgWrapper = "bg-white" }) {
  const navMenuRef = useRef(null);

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

      <Navbar navMenuRef={navMenuRef} />

      {children}

      <Footer />
    </div>
  );
}

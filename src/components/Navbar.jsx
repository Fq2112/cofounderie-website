import { t } from "i18next";
import React from "react";
import { path } from "../utils/const";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

export default function Navbar({
  navMenuRef,
  showMenu,
  burgerAnimate,
}) {
  const { pathname } = useLocation();
  const menuList = [
    {
      name: t("header.nav.home"),
      path: path.home,
    },
    {
      name: t("header.nav.services"),
      path: path.services,
    },
    {
      name: t("header.nav.contact"),
      path: path.contact,
    },
  ];

  return (
    <nav
      ref={navMenuRef}
      className={classNames(
        "h-screen w-full fixed top-0 left-0 right-0 flex items-center gap-6 flex-col transition-all duration-700 ease-in-out py-4 bg-neutral-200",
        {
          hidden: !showMenu,
          "flex scale-x-125 -translate-y-full opacity-0":
            showMenu && !burgerAnimate,
          "flex scale-x-100 translate-y-0 opacity-100":
            showMenu && burgerAnimate,
        }
      )}
    >
      {menuList.map((v, idx) => (
        <Link
          key={`menu-${idx}`}
          to={v.path}
          className={classNames(
            "uppercase transition-all duration-300 hover:text-secondary hover:scale-x-105",
            { "text-secondary": pathname === v.path }
          )}
        >
          {v.name}
        </Link>
      ))}
    </nav>
  );
}

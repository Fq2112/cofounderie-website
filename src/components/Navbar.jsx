import { t } from "i18next";
import React, { useState } from "react";
import { path } from "../utils/const";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import SocialMedia from "./SocialMedia";

export default function Navbar({ navMenuRef, showMenu, burgerAnimate }) {
  const { pathname } = useLocation();
  const [hoveredMenu, setHoveredMenu] = useState({ idx: null, title: null });

  const menuList = [
    {
      title: t("header.nav.home.title"),
      body: t("header.nav.home.body"),
      path: path.home,
    },
    {
      title: t("header.nav.works.title"),
      body: t("header.nav.works.body"),
      path: path.works,
    },
    {
      title: t("header.nav.services.title"),
      body: t("header.nav.services.body"),
      path: path.services,
    },
    {
      title: t("header.nav.thoughts.title"),
      body: t("header.nav.thoughts.body"),
      path: path.thoughts,
    },
    {
      title: t("header.nav.about.title"),
      body: t("header.nav.about.body"),
      path: path.about,
    },
    {
      title: t("header.nav.people.title"),
      body: t("header.nav.people.body"),
      path: path.people,
    },
    {
      title: t("header.nav.contact.title"),
      body: t("header.nav.contact.body"),
      path: path.contact,
    },
  ];

  return (
    <nav
      ref={navMenuRef}
      className={classNames(
        "h-screen w-full fixed top-0 left-0 right-0 flex items-end justify-center gap-x-72 transition-all duration-700 ease-in-out py-20 bg-neutral-100",
        {
          "flex scale-x-125 -translate-y-full opacity-0":
            showMenu && !burgerAnimate,
          "flex scale-x-100 translate-y-0 opacity-100":
            showMenu && burgerAnimate,
        }
      )}
    >
      <div className="flex flex-col gap-y-4 relative">
        {hoveredMenu.title !== null && (
          <div className="absolute -top-[14rem] left-0 text-[30rem] font-bold text-white">
            {hoveredMenu.title.charAt(0)}.
          </div>
        )}

        {menuList.map((v, idx) => (
          <Link key={`menu-${idx}`} to={v.path}>
            <div
              className="flex flex-col gap-y-2 relative group"
              onMouseEnter={() => setHoveredMenu({ idx: idx, title: v.title })}
              onMouseLeave={() => setHoveredMenu({ idx: null, title: null })}
            >
              <span className="absolute top-1 -left-8 text-base font-bold text-secondary opacity-0 group-hover:opacity-100 group-hover:translate-x-10 transition-all ease-in-out duration-300">
                {(idx + 1).toString().padStart(2, "0")}
              </span>

              <span
                className={classNames(
                  "text-4xl group-hover:text-secondary group-hover:translate-x-10 transition-all ease-in-out duration-300",
                  {
                    "text-secondary": pathname === v.path,
                    "opacity-20":
                      hoveredMenu.idx !== null && hoveredMenu.idx !== idx,
                  }
                )}
              >
                {v.title}
              </span>

              <span className="text-lg opacity-0 group-hover:opacity-100 group-hover:translate-x-10 transition-all ease-in-out duration-300">
                {v.body}
              </span>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-y-6 mb-8">
        <SocialMedia
          withBorder={false}
          withName={true}
          withIconFill={true}
          textColor="text-secondary"
        />
      </div>
    </nav>
  );
}

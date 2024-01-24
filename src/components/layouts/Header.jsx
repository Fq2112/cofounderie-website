import { BsEnvelopePaper, BsPhone } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { RiCloseLine } from "react-icons/ri";
import { IoMdRocket } from "react-icons/io";
import { Fragment, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { assets, company, externalPath, path } from "../../utils/const";
import classNames from "classnames";
import { t } from "i18next";
import SocialMedia from "../SocialMedia";
import Navbar from "../Navbar";
import navbarStore from "../../utils/zustand-store/navbarStore";

const TopBar = () => {
  return (
    <div className="w-full relative bg-neutral-800 hidden md:block before:content-[''] before:absolute before:-left-2.5 before:top-0 before:w-[50vw] before:h-full before:bg-neutral-950 before:skew-x-[-25deg]">
      <div className="container mx-auto flex justify-between relative text-xs">
        <ul className="flex gap-x-8 text-white/70 py-2">
          <a
            href={company.gmapDir}
            target="_blank"
            rel="noreferrer"
            className="h-fit"
          >
            <li className="flex gap-x-2 items-center hover:text-secondary cursor-pointer transition-all duration-300">
              <FiMapPin className="w-4 h-4 flex-none" />
              {company.address}
            </li>
          </a>
          <a href={`mailto:${company.email}`} className="h-fit">
            <li className="flex gap-x-2 items-center hover:text-secondary cursor-pointer transition-all duration-300">
              <BsEnvelopePaper className="w-4 h-4 flex-none" />
              {company.email}
            </li>
          </a>
          <a href={`tel:${company.phone}`} className="h-fit">
            <li className="flex gap-x-2 items-center hover:text-secondary cursor-pointer transition-all duration-300">
              <BsPhone className="w-4 h-4 flex-none" />
              {company.phone}
            </li>
          </a>
        </ul>
        <ul className="flex gap-x-6 text-white/70 py-2">
          <SocialMedia withBorder={false} />
        </ul>
      </div>
    </div>
  );
};

export default function Header({ isMenuWhite }) {
  const navMenuRef = useRef(null);
  const { showMenu, setShowMenu, burgerAnimate, setBurgerAnimate } =
    navbarStore((state) => state);

  // switch show menu burger to true
  useEffect(() => {
    let timeout;
    if (showMenu) timeout = setTimeout(() => setBurgerAnimate(true), 100);

    return () => clearTimeout(timeout);
  }, [setBurgerAnimate, showMenu]);

  // switch show menu burger to false
  useEffect(() => {
    let timeout;
    if (!burgerAnimate) timeout = setTimeout(() => setShowMenu(false), 100);

    return () => clearTimeout(timeout);
  }, [burgerAnimate, setShowMenu]);

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = (e) => {
      const { keyCode } = e;

      if (!showMenu || keyCode !== 27) return;
      setBurgerAnimate(false);
    };

    if (showMenu) {
      document.addEventListener("keydown", keyHandler);
    }
    return () => document.removeEventListener("keydown", keyHandler);
  });

  // switch showing burger menu event
  const showBurgerMenu = () => {
    if (!showMenu) setShowMenu(true);
    else setBurgerAnimate(false);
  };

  return (
    <Fragment>
      <TopBar />

      <header
        className={`flex items-center justify-between w-full h-[6.3rem] z-[1] sticky inset-0 bg-transparent transition-all duration-300 ease-in-out ${
          isMenuWhite ? "px-12" : "px-16"
        }`}
      >
        <Link className="z-10" to={path.home}>
          {isMenuWhite || showMenu ? (
            <div
              className={`w-16 h-16 p-2 rounded-[14px] transition-all ease-in-out duration-300 ${
                showMenu ? "bg-black" : "bg-neutral-100 hover:bg-black"
              }`}
            >
              <img
                src={assets.iconNoBg}
                alt="icon"
                className="w-full h-full object-contain"
              />
            </div>
          ) : (
            <div className="w-full">
              <img
                src={assets.logo}
                alt="logo"
                className="w-full object-contain"
              />
            </div>
          )}
        </Link>

        <div className="flex items-center justify-center gap-x-6">
          {isMenuWhite ? (
            <a
              className="group flex-shrink-0 w-14 h-14 hover:w-fit hover:px-4 bg-neutral-100 rounded-full flex gap-x-1 items-center justify-center hover:bg-black hover:text-white transition-all ease-in-out duration-300"
              href={externalPath.cta}
            >
              <IoMdRocket className="absolute w-8 h-8 flex-shrink-0 group-hover:relative group-hover:h-6 group-hover:w-6 group-hover:rotate-45 transition-all ease-in-out duration-300" />
              <span className="hidden group-hover:block font-semibold transition-all ease-in-out duration-300">
                {t("header.cta")}
              </span>
            </a>
          ) : (
            <a
              href={externalPath.cta}
              className="flex-shrink-0 text-secondary font-semibold border-b-2 border-neutral-200 hover:border-middle transition-all ease-in-out duration-500"
            >
              {t("header.cta")}
            </a>
          )}

          <button
            className={`z-10 w-14 h-14 flex items-center flex-shrink-0 justify-center hover:text-secondary transition-all duration-300 ease-in-out ${
              isMenuWhite &&
              "bg-neutral-100 rounded-full hover:bg-black hover:text-white "
            }`}
            onClick={showBurgerMenu}
          >
            <HiOutlineMenuAlt1
              className={classNames(
                "absolute flex-shrink-0 h-8 w-8 scale-x-[-1] transition-all duration-300 ease-in-out",
                {
                  "rotate-45 opacity-0": showMenu && burgerAnimate,
                }
              )}
            />
            <RiCloseLine
              className={classNames(
                "absolute flex-shrink-0 h-8 w-8 transition-all duration-300 ease-in-out",
                {
                  "opacity-0": (!burgerAnimate && showMenu) || !showMenu,
                  "rotate-90 opacity-100": showMenu && burgerAnimate,
                }
              )}
            />
          </button>
        </div>

        {showMenu && (
          <Navbar
            navMenuRef={navMenuRef}
            showMenu={showMenu}
            burgerAnimate={burgerAnimate}
          />
        )}
      </header>
    </Fragment>
  );
}

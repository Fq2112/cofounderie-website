import { useEffect, useState } from "react";
import classNames from "classnames";
import { HiChevronUp } from "react-icons/hi";
import { t } from "i18next";
import { company, path } from "../../utils/const";
import { Link } from "react-router-dom";
import SocialMedia from "../SocialMedia";
import navbarStore from "../../utils/zustand-store/navbarStore";

export default function Footer() {
  const { showMenu } = navbarStore((state) => state);
  const [date, setDate] = useState();
  const getYear = () => setDate(new Date().getFullYear());
  const [scrollTop, setScrollTop] = useState(0);
  const [isShow, setShow] = useState(false);

  const onScroll = (e) => {
    const winScroll = e.target.scrollTop;
    const height = e.target.scrollHeight - e.target.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setScrollTop(scrolled);

    setShow((isShow) => {
      if (!isShow && (e.target.scrollTop > 20 || e.target.scrollTop > 20)) {
        return true;
      }

      if (isShow && e.target.scrollTop < 4 && e.target.scrollTop < 4) {
        return false;
      }

      return isShow;
    });
  };

  useEffect(() => {
    getYear();

    document
      .getElementById("wrapper")
      .addEventListener("scroll", (e) => onScroll(e));
    return () => {
      const scrollEvent = document.getElementById("wrapper");
      if (scrollEvent)
        scrollEvent.removeEventListener("scroll", (e) => onScroll(e));
    };
  }, []);

  return (
    <footer
      className={classNames(
        "flex items-center py-8 justify-center text-xs relative w-full bg-neutral-950 transition-all ease-in-out duration-1000",
        {
          "translate-y-full": showMenu,
        }
      )}
    >
      <div className="flex items-center divide-x divide-white/35 text-white/70">
        <p className="pr-4">
          &copy; {date} &nbsp;
          <Link
            to={path.home}
            className="text-secondary transition-opacity hover:opacity-70 duration-300"
          >
            {company.name}
          </Link>
          . {t("footer.all-rights-reserved")}
        </p>

        <Link
          to={path.home}
          className="px-4 hover:text-secondary transition-all duration-300"
        >
          {t("footer.tos")}
        </Link>

        <Link
          to={path.home}
          className="px-4 hover:text-secondary transition-all duration-300"
        >
          {t("footer.pp")}
        </Link>

        <ul className="flex gap-x-4 pl-4">
          <SocialMedia withBorder={true} />
        </ul>
      </div>

      <div className="fixed mb-0 bottom-0 left-0 w-full rounded-none z-20 h-[5px]">
        <div
          className={classNames(
            "h-full transition duration-500 ease-in-out w-full bg-neutral-800",
            { "bg-neutral-950": scrollTop > 99 }
          )}
          style={{ width: `${scrollTop}%` }}
        ></div>
      </div>

      <button
        className={`w-10 h-10 fixed bottom-8 right-8 rounded-full z-30 flex items-center justify-center cursor-pointer transition duration-300 ease-linear bg-neutral-200 hover:text-white hover:bg-black opacity-${
          isShow ? 100 : 0
        }`}
        onClick={() =>
          document
            .getElementById("wrapper")
            .scroll({ top: 0, left: 0, behavior: "smooth" })
        }
      >
        <HiChevronUp className="flex-shrink-0 h-8 w-8" />
      </button>
    </footer>
  );
}

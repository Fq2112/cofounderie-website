import { company } from "./const";

export const titleScroller = (pageTitle) => {
  let title = `${pageTitle} | ${company.name}`;
  let seTime;

  (function titleScroller(text) {
    document.title = text;
    seTime = window.setTimeout(() => {
      titleScroller(text.substr(1) + text.substr(0, 1));
    }, 500);
  })(title + " ~ ");

  return () => window.clearTimeout(seTime);
};

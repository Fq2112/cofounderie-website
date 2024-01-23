import { appTitle } from "./const";

export const titleScroller = (pageTitle) => {
  let title = `${pageTitle} | ${appTitle}`;
  let seTime;

  (function titleScroller(text) {
    document.title = text;
    seTime = window.setTimeout(() => {
      titleScroller(text.substr(1) + text.substr(0, 1));
    }, 500);
  })(title + " ~ ");

  return () => window.clearTimeout(seTime);
};

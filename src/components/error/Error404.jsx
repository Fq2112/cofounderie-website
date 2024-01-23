import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { titleScroller } from "../../utils/utils";
import Cofounderie404 from "../../assets/images/404-illustration.svg";
import { t } from "i18next";
import { path } from "../../utils/const";

export default function Error404() {
  useEffect(() => titleScroller(t("error.404.title")), []);

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
        <div className="max-w-2xl m-auto">
          <div className="text-center px-4">
            <div className="inline-flex mb-8">
              <img
                src={Cofounderie404}
                width="176"
                height="176"
                alt="404 illustration"
              />
            </div>
            <div className="mb-6 dark:text-navy-100">
              {t("error.404.message")}
            </div>
            <Link
              to={path.home}
              className="btn bg-primary-100 hover:bg-primary-200 text-white"
            >
              {t("error.404.button")}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

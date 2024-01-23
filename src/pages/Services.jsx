import React, { useEffect } from "react";
import { titleScroller } from "../utils/utils";
import { t } from "i18next";

export default function Services() {
  useEffect(() => titleScroller(t("header.nav.services")), []);

  return (
    <div className="flex w-full h-screen bg-black text-white">
      {t("header.nav.services")}
    </div>
  );
}

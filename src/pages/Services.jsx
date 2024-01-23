import React, { useEffect } from "react";
import { titleScroller } from "../utils/utils";
import { t } from "i18next";

export default function Services() {
  useEffect(() => titleScroller(t("services.title")), []);

  return (
    <div className="flex w-full h-screen bg-black text-white">
      {t("services.title")}
    </div>
  );
}

import React from "react";
import { t } from "i18next";
import Extend from "../components/layouts/Extend";

export default function Home() {
  return (
    <Extend menu={t("header.nav.home.title")}>
      <div className="h-screen">{t("header.nav.home.title")}</div>
    </Extend>
  );
}

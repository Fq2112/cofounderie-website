import React from "react";
import { t } from "i18next";
import Extend from "../components/layouts/Extend";
import { assets, externalPath } from "../utils/const";
import SectionDivider from "../components/layouts/SectionDivider";
import { HeroD3Animation } from "../components/d3/D3Collision";

export default function Home() {
  return (
    <Extend menu={t("header.nav.home.title")}>
      <div className="w-fulll relative">
        <HeroD3Animation />
        <div className="w-full flex flex-col items-center text-center relative pt-20 pb-8 px-16">
          <h1 className="text-6xl font-albraBlack mb-16">
            {t("home.award-winning")}
            <br />
            <span className="font-light font-sans">co</span>CTO +{" "}
            <span className="font-light font-sans">co</span>CPO
          </h1>

          <h3 className="text-3xl mb-10">{t("home.building-your")}</h3>

          <a
            href={externalPath.cta}
            className="z-[1] mb-4 text-xl font-semibold border-2 border-black text-black py-2.5 px-6 rounded-full hover:bg-black hover:text-white transition-all ease-in-out duration-700"
          >
            {t("home.lets-talk")}
          </a>
          <span className="text-sm">{t("home.book-a-free")}</span>

          <SectionDivider />

          <video
            className="w-3/4 h-full object-cover rounded-[374px_374px_374px_100px]"
            autoPlay
            loop
            muted
          >
            <source src={assets.videoHero} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </Extend>
  );
}

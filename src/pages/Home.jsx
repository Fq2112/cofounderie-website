import React, { useEffect, useRef } from "react";
import { t } from "i18next";
import Extend from "../components/layouts/Extend";
import * as d3 from "d3";
import { assets, externalPath } from "../utils/const";
import SectionDivider from "../components/layouts/SectionDivider";

const HeroPhysics = () => {
  const svgRef = useRef();

  useEffect(() => {
    const width = 800;
    const height = 600;

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    const nodes = d3
      .range(20)
      .map(() => ({ x: Math.random() * width, y: Math.random() * height }));

    d3.forceSimulation(nodes)
      .force("charge", d3.forceManyBody().strength(-20))
      .force("collide", d3.forceCollide().radius(10))
      .on("tick", () => {
        svg
          .selectAll("circle")
          .attr("cx", (d) => d.x)
          .attr("cy", (d) => d.y);

        svg
          .selectAll("line")
          .attr("x1", (d) => d.source.x)
          .attr("y1", (d) => d.source.y)
          .attr("x2", (d) => d.target.x)
          .attr("y2", (d) => d.target.y);
      });

    const links = [];
    nodes.forEach((source, i) => {
      nodes.forEach((target, j) => {
        if (i !== j) {
          const distance = Math.sqrt(
            (source.x - target.x) ** 2 + (source.y - target.y) ** 2
          );
          if (distance < 50) {
            links.push({ source, target });
          }
        }
      });
    });

    svg
      .selectAll("line")
      .data(links)
      .enter()
      .append("line")
      .attr("stroke", "gray")
      .attr("stroke-width", 1);

    svg
      .selectAll("circle")
      .data(nodes)
      .enter()
      .append("circle")
      .attr("cx", (d) => d.x)
      .attr("cy", (d) => d.y)
      .attr("r", 10)
      .attr("fill", "steelblue")
      .on("mouseover", handleMouseOver)
      .on("mouseout", handleMouseOut);

    function handleMouseOver(d) {
      d3.select(this).transition().attr("r", 15);
    }

    function handleMouseOut(d) {
      d3.select(this).transition().attr("r", 10);
    }
  }, []);

  return (
    <svg ref={svgRef} className="absolute opacity-50 mix-blend-multiply" />
  );
};

export default function Home() {
  return (
    <Extend menu={t("header.nav.home.title")}>
      <div className="pt-20 pb-8">
        <div className="w-full flex flex-col items-center text-center relative px-16">
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

          <HeroPhysics />
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

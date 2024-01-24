import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

export const HeroD3Animation = () => {
  const svgRef = useRef();

  const _dots = (width, d3) => {
    const k = width / 200;
    const scale = 0.25;
    const r = d3.randomUniform(k * scale, k * 4 * scale);
    const colorCodes = ["#AF56E7", "#29EEE8", "#8585E6"];
    const n = colorCodes.length;

    return Array.from({ length: 1000 }, (_, i) => ({
      r: r(),
      group: i && (i % n) + 1,
      color: colorCodes[(i && i % n) || 0],
    }));
  };

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const context = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .node()
      .getContext("2d");
    const nodes = _dots(width, d3);

    const simulation = d3
      .forceSimulation(nodes)
      .alphaTarget(0.3) // stay hot
      .velocityDecay(0.1) // low friction
      .force("x", d3.forceX().strength(0.01))
      .force("y", d3.forceY().strength(0.01))
      .force(
        "collide",
        d3
          .forceCollide()
          .radius((d) => d.r + 1)
          .iterations(3)
      )
      .force(
        "charge",
        d3.forceManyBody().strength((d, i) => (i ? 0 : (-width * 2) / 3))
      )
      .on("tick", ticked);

    d3.select(context.canvas)
      .on("touchmove", (event) => event.preventDefault())
      .on("pointermove", pointed)
      .on("mouseleave", (event) => {
        nodes[0].fx = null;
        nodes[0].fy = null;
      });

    return () => simulation.stop();

    function pointed(event) {
      const [x, y] = d3.pointer(event);
      nodes[0].fx = x - width / 2;
      nodes[0].fy = y - height / 2;
    }

    function ticked() {
      context.clearRect(0, 0, width, height);
      context.save();
      context.translate(width / 2, height / 2);
      for (const d of nodes) {
        context.beginPath();
        context.moveTo(d.x + d.r, d.y);
        context.arc(d.x, d.y, d.r, 0, 2 * Math.PI);
        context.fillStyle = d.color;
        context.fill();
      }
      context.restore();
    }
  }, []);

  return (
    <canvas
      ref={svgRef}
      className="z-[1] absolute top-0 left-0 w-full mix-blend-multiply opacity-50"
    />
  );
};

import React from "react";
import { Route, Routes as RouteDom } from "react-router-dom";
import Error404 from "../components/error/404/Error404";
import { path } from "../utils/const";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Contact from "../pages/Contact";

export default function Routes() {
  return (
    <RouteDom>
      <Route path={path.home} element={<Home />} />
      <Route path={path.services} element={<Services />} />
      <Route path={path.contact} element={<Contact />} />
      <Route path="*" element={<Error404 />} />
    </RouteDom>
  );
}

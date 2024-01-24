import React from "react";
import { Route, Routes as RouteDom } from "react-router-dom";
import Error404 from "../components/error/404/Error404";
import { path } from "../utils/const";
import Home from "../pages/Home";

export default function Routes() {
  return (
    <RouteDom>
      <Route path={path.home} element={<Home />} />
      <Route path={path.works} element={<>{path.works} here</>} />
      <Route path={path.services} element={<>{path.services} here</>} />
      <Route path={path.thoughts} element={<>{path.thoughts} here</>} />
      <Route path={path.about} element={<>{path.about} here</>} />
      <Route path={path.people} element={<>{path.people} here</>} />
      <Route path={path.contact} element={<>{path.contact} here</>} />
      <Route path="*" element={<Error404 />} />
    </RouteDom>
  );
}

import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./home";
import Categories from "./categories";
import Error from "../components/error";

function Root() {
  return (
    <>
    <Outlet/>
    </>
  );
}

export default Root;

import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./home";
import Categories from "./categories";
import Error from "../components/error";

function Root() {
  return (
    <>
<Routes>
<Route path="/"  Component={Home}/>
<Route path="/categories" element={<Categories/>} />
<Route path="*" element={<Error/>}/>
</Routes>
    </>
  );
}

export default Root;

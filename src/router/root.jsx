import { Route, Routes } from "react-router-dom";
import Home from "./home";
import Categories from "./categories";




function Root() {
    return ( <>
    <Routes>
    <Route path="/" element= {<Home/>}/>
    <Route path="/Categories" element= {<Categories/>}/>
    </Routes>
    
    </> );
}

export default Root;
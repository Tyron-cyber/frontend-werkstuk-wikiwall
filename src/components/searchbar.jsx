import Categories from "../router/categories";
import Navigation from "./navigation";
import TopicContainer from "./topicContainer";
import {motion} from "framer-motion"

function SearchBar() {
    return ( <>
    <div style={{ display: "flex", marginTop:"20px", justifyContent:"space-between" }}>
        
         <div className="searchbar">
        <input type="text" name="" id="" placeholder="search topic"/>
        <motion.button
             whileHover={{scale:1.2}}
        >Search</motion.button>
        </div>
    </div>
   
   
 
    </> );
}

export default SearchBar;
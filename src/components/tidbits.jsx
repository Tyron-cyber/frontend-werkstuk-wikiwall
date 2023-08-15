import data from "./data.json"

import {motion} from "framer-motion"

const Tidbits = () => {


    return ( <>
     <div className="titleBar">
        <div className="titles"><h1> Actuality </h1> </div> 
</div>
 
<motion.div 

initial={{opacity:0, x:-100}}
 animate={{ x:0 , opacity:1}}
 transition={{duration:1.5}}>

<center><h1 style={{color: "#0c0cc5"}}>Did you know ? </h1> </center>

<div className="tidbitsCard" >
    {data.map ((item)=> ( <div key={item.id}> 
    <center><h4 className="tidbits">{item.weetje}</h4></center>
    
    </div>))}
</div>
</motion.div>


    </> );

 
}
export default Tidbits;
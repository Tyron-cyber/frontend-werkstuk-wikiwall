import { Link} from "react-router-dom";
import { useState } from "react";
import {motion} from 'framer-motion';
import image from '../assets/logo.svg'
import icon from'../assets/nav_Icon.svg'



const varients= {
    
    open: (height = 1000) =>({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            delay:.7,
            type: "spring",
            stiffness: 25,
            restDelta: 2
          }}),
    closed:{ 
        transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }}
    }

function Navigation() {
const [toggle, setNav]= useState(false)


    return ( <>
    <motion.nav className="navigation"
    animate={ toggle ? "open" : "closed" }
    variants={varients}
    >
        <div>
        <div className="image">
        <img src={image} alt="" />
     </div>
     <div style={{display:"flex"}}>
     <ul>
      
      <motion.li 
      whileHover={{scale: 1.2}}
      whileTap={{scale:1}}
      className="listElement">
        <Link className="linkStyle" to="/"> Home</Link>
    </motion.li>
      
    <motion.li 
      whileHover={{scale: 1.2}}
      whileTap={{scale:1}}
      className="listElement"> 
      <Link className="linkStyle" to="categories"> Catgeories</Link>
    </motion.li>
      
    <motion.li 
     whileHover={{scale: 1.2}}
     whileTap={{scale:1}}
      className="listElement">
        <Link className="linkStyle" to="/error"> Profile</Link>
    </motion.li>

    <motion.li 
     whileHover={{scale: 1.2}}
     whileTap={{scale:1}}
      className="listElement">
        <Link className="linkStyle" to="https://tyron-cyber.github.io/frontend-werkstuk-damso/"> TheVie</Link>
    </motion.li>    
      </ul>

      

      <motion.button
    whileHover={{scale: 1.2}}

    whileTap={{scale:1}}

    style={{width: "3vw", border: "none", backgroundColor:"white", borderRadius:"100px" }} onClick={()=> {
    setNav(toggle => !toggle)

}}> 

<img src={icon} alt="" />
    </motion.button>
     </div>
     <div className='loginContainer' style={{marginTop:"15vh"}}>
     <Link to="*"> 
     <motion.button 
    whileHover={{scale: 1.2}}
    className='loginButtons' style={{border:" solid 2px white", backgroundColor:'#0c0cc5'}}> <p style={{width:"10vw",margin:"0", color:"white"}}>Log In</p></motion.button>
     </Link>
    
    <br />

    <Link to="*"  > 
    <motion.button 
    whileHover={{scale: 1.2}}
    className='loginButtons' style={{backgroundColor:"white" , border:"none"}}> <p style={{width:"10vw",margin:"0", color:'#0c0cc5'}}>Regiseter</p></motion.button>
    </Link>
   
    </div>
    
    </div>
    </motion.nav>
    
    <motion.button
    whileHover={{scale: 1.2}}
    
    whileTap={{scale:1}}
    className=" navButton"
    onClick={()=> {
    setNav(toggle => !toggle)
}}> 
    <img src={icon} alt="" />
    </motion.button>
    
    </> );
}

export default Navigation;
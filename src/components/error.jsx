import { motion } from "framer-motion";
import image from '../assets/logo.svg'

const Error = () => {
    return ( <>
    
    <div>
        <img className="errorImage" src={image} alt="" />
        <motion.h1 
        initial={{y:100, opacity:0}}
        animate={{y:0, opacity:1 }}
        transition={{duration:1.2}}
        >
            <center><span className="highlight">something</span> went wrong...</center>
            </motion.h1>
        <div className="message">
            <motion.p
            initial={{y:100, opacity:0}}
            animate={{y:0, opacity:1 }}
            transition={{duration:1.4}}
            > I bet you tried to log in or to register. This feature is not working yet
            because wikiwall is a fictive website. </motion.p>

        <motion.div 
        initial={{y:100, opacity:0}}
        animate={{y:0, opacity:1 }}
        transition={{duration:1.6}} 
        className="credits"> 
            <h4>by Tyron Zinga </h4> 
            <h4 style={{color:'#0c0cc5'}}> 2MCT </h4> 
        </motion.div> 
        </div>
    </div>

  
   
    
    </> );
}
 
export default Error;
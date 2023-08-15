
import bachmoet from '../assets/bachmoet.jfif'
import {motion} from 'framer-motion'
const News = () => {
    return ( <>
       <div className="titleBar">
        <div className="titles"><h1> Actueel </h1> </div> 
</div>
 
 <motion.div
 initial={{opacity:0, x:-100}}
 animate={{ x:0 , opacity:1}}
 transition={{duration:1.5}}
 >
    <div className='news'>
        <h1>Battle of Bachmut</h1>
        <img src={bachmoet} alt="" />
    </div>
    
    <motion.div 
    className='bachmoetCard' 
    initial={{opacity:0, x:800, y:-150}}
    animate={{x:800,opacity:1,y:-150 }}
    transition={{duration:1}}
    drag
    dragConstraints={{
        top:-700,
        left: 300,
        right: 700,
        bottom:0,
        
      }}
     >
        <div style={{marginLeft:"1vw", width:"90%"}}>
       <p>The Battle of Bachmut is a military conflict over the Ukrainian town of Bachmut in Donetsk Oblast that has been ongoing since August 1, 2022. It is part of the larger Battle of the Donbas in the Russo-Ukrainian War.
        Ukrainian troops face regular Russian troops and Wagner group units.</p>
       <center><h5 style={{color:"#0c0cc5"}}>drag me !</h5></center>
      </div> 
     
    </motion.div>
 </motion.div>
    </> );
}
 
export default News;
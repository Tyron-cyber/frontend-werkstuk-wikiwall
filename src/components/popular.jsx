import { motion} from 'framer-motion'
import './popular.module.css'

function Popular () {
    return (  <>
     <div className="titleBar">
        <div className="titles"><h1>Popular</h1> </div> 
        </div>
    <motion.div 

      initial={{x:-100, opacity:0}}
      animate={{x:0, opacity:1 }}
      transition={{duration:1}}
     
    >
        <div>
        <img style={{ width:"75vw", textAlign:'center', marginLeft:"15vw", marginTop: "3vw",borderRadius:"30px"}} src="https://d2r55xnwy6nx47.cloudfront.net/uploads/2020/07/Photosynthesis_2880_Lede.jpg" alt="" />
        </div>
       
    </motion.div>
    <motion.div 
    className='card' 
    initial={{opacity:0, x:400}}
    animate={{x:400,opacity:1 }}
    transition={{duration:1}}
    drag
    dragConstraints={{
        top:-700,
        left: 300,
        right: 700,
        bottom:0,
        
      }}
     >
    <h3 style={{color:"#8bdc21", textAlign: "center"}}>photosythisis</h3>
     <div style={{marginLeft:"1vw", width:"90%"}}>
      <h4 style={{color:"#8bdc21"}}>What? </h4>
       <p>Photosynthesis is a biochemical process by which the green plants,
        most algae and some bacteria use sunlight as an energy source to produce carbon dioxide and
        convert water into sugar. This happens in the chlorophyll granules by means of the pigment.</p>
       <center><h5 style={{color:"#8bdc21"}}>drag me !</h5></center>
      </div>
    </motion.div>
    </>);
}

export default Popular
;
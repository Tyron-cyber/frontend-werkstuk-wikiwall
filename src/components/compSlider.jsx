import { useState } from "react";
import{ animate, motion, transform} from 'framer-motion'
import { UNSAFE_DataRouterStateContext } from "react-router-dom";
const CompSlider = ({comps}) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const buttonHandler = (direction) =>  {

    setCurrentIndex(() => {
        if(direction === 'next' ){
            console.log(currentIndex)

            return currentIndex  + 1
        } 

        else if (direction === 'prev' ){
            console.log(currentIndex)
        return currentIndex - 1
        }
    })
        
    }  

    return ( <>
     
<div>
        <div>
            {comps[currentIndex]}
        </div>
<div className="carouselButtons">
    <center><motion.button 
    whileHover={ {scale: 1.3 }}
    className="carouselButton" onClick={() => buttonHandler('prev')}> previous</motion.button> </center>
    <center><motion.button
    whileHover={ {scale: 1.3 }}
     className="carouselButton" onClick={() => buttonHandler ('next')}>next</motion.button> </center>
        
        
</div>
        
</div>
    </> );
}
 
export default CompSlider;
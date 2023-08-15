import CompSlider from "./compSlider";
import News from "./news";
import Tidbits from "./tidbits";

const Slider = () => {
    const comps = [<News/>, <Tidbits/>  ]
    return ( <>
    
    <div>
        <CompSlider comps={comps}></CompSlider>
    </div>
    
    </> );
}
 
export default Slider;
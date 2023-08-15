import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';
function Profile({color, bColor}) {
    return ( <>
    <div className="titleBar">
        <div className="titles"><h1>Profile</h1> </div> 
</div>
    <div className='loginContainer'>
        <Link to="*"> 
        <motion.button 
    whileHover={{scale: 1.2}}
    className='loginButtons'> <p style={{width:"10vw",margin:"0"}}>Log In</p></motion.button>
    <br /></Link>
    <Link to="*"> 
    
    <motion.button 
    whileHover={{scale: 1.2}}
    className='loginButtons' style={{backgroundColor:[bColor]}}> <p style={{width:"10vw",margin:"0", color:[color]}}>Regiseter</p></motion.button>
    </Link>
    </div>

    </> );
}

export default Profile;
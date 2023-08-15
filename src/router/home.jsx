import Navigation from "../components/navigation";
import SearchBar from "../components/searchbar";
import Profile from "../components/profile";
import image from '../assets/logo.svg'
import { Link, Outlet, Route, Routes } from "react-router-dom";
import {motion, Variant}from 'framer-motion'
import Popular from "../components/popular";
import Tidbits from "../components/tidbits";
import Slider from "../components/slider";


const variants ={
    active: {
        backgroundColor: "blue"
    },

    inactive: {
        backgroundColor: "white",
        transition:{
            duration:2
        }
    }

}
function Home() {
    return ( <> 
<Navigation/> 
    <header>
        <img className="headImage" src={image} alt="" />
        
    </header>
    
<Popular/>
<Slider/>

<Profile color={"white"} bColor={"#0c0cc5"}/>





<div style={{textAlign:"center"}}>
    
    <h1 style={{ fontSize:" 25px",marginLeft: "45vw",color: "white", backgroundColor:"#0c0cc5" ,width:"12vw", borderRadius:"50px"}}>Explore</h1>
    
    
    <SearchBar/>
</div>

<footer>
    <img src={image} alt="" />
    <div>
        <p>Wikiwallis een online encyclopedie die ernaar streeft informatie te bieden in alle erkende talen ter wereld, die vrij herbruikbaar, objectief en verifieerbaar is. Het project is gebaseerd op vijf basisprincipes. De Nederlandstalige versie startte op 19 juni 2001 en is met meer dan 2,1 miljoen artikelen de op vijf na grootste van circa 330 taalversies.</p>
   
        <p>De encyclopedie is vrij bewerkbaar. Dat houdt in dat iedereen tekst en afbeeldingen kan toevoegen of aanpassen, met inachtneming van de basisregels. Voor de bewerkers zijn er diverse hulppagina’s beschikbaar. Er is ook een snelcursus voor nieuwelingen. Zaken uitproberen kan in de zandbak en vragen kunnen gesteld worden bij de helpdesk. Voor privacyvragen kunt u hier terecht.</p>
    </div>
</footer>
    </>
        
     );
}

export default Home;
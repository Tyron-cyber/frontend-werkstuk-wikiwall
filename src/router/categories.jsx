import SearchBar from "../components/searchbar";
import TopicContainer from "../components/topicContainer";
import Navigation from "../components/navigation";
function Categories() {
    return ( <>
<Navigation/>
    <div className="titleBar">
        <div className="titles"><h1>Categories</h1> </div> 
        <SearchBar/>
        </div>
        

    <div className="categories" >
        <nav >
            <ul>
                <li>Biologie</li>
                <li>Geschidenis</li>
                <li>Kunst & Cultuur</li>
                <li>Landen & Volken</li>
                <li>Mens & Maatschapij</li>
                <li>Wetenschap & Techonlogie</li>
                <li>Politiek</li>
                <li>Religie</li>
                <li>Sport</li>
                <li>Taal</li>
            </ul>
        </nav>
        
        <TopicContainer/>
    </div>
    
    
    
    </> );
}

export default Categories;
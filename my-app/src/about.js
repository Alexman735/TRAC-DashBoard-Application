import { useParams } from "react-router-dom";
import Navbar from './navbar'
import { useLocation } from 'react-router-dom'

function About(props)
{
  const {name} = useParams();
  let url = "/dashboard/"+name;
  const routes = [
    {url : url + "/about", name: "About"},
    {url : url + "/stats", name: "Stats"},
    {url : "/TRAC", name: "What is TRAC?"}
  ];
  
    return (
      <div className = "home">
          <Navbar routes={routes} />
          <header className="App-header">
              About
          </header>
      </div>
      
    );
}

export default About;
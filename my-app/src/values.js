import { useParams } from "react-router-dom";
import Navbar from './navbar'
import { useLocation } from 'react-router-dom'
function Values(props)
{
  let location = useLocation();
  let url = location.pathname;
  const routes = [
    {url : "/TRAC", name: "What is TRAC?"},
    {url : "/values", name: "Core Values"},
    {url : "/fellows", name: "Our Fellows"},
    {url : "/MoreInfo", name: "More Info"}
  ];
    return (
      <div className = "home">
          <Navbar routes={routes} url={url}/>
          
          <body className="App-body">
            <header className="App-header">
                Value 1 Here
            </header>
            <h1 className="App-textbox">
                Describe Value 1 Here
           </h1>
           <header className="App-header">
                Value 2 Here
           </header>
            <h1 className="App-textbox">
                Describe Value 2 Here
           </h1>
            
          
          </body>
      </div>
      
    );
}

export default Values;
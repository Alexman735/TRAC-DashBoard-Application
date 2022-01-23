import { useParams } from "react-router-dom";
import Navbar from './navbar'
import { useLocation } from 'react-router-dom'
function Fellows(props)
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
          <header className="App-header">
              What is TRAC?
          </header>
          <body className="App-body">
            <h1 className="App-textbox">
            The TRAC Writing Fellows Program was launched in the fall of 2008 as a new initiative of Library and Technology Services to advance writing and communication instruction in courses across the curriculum at Lehigh. 
          In the first semester of the 2008-09 pilot year, 15 TRAC Writing Fellows worked with 10 members of the faculty from across all three undergraduate colleges. 
          The successful pilot program paved the way for substantial growth in just a few years. 
          As of the fall 2017 semester, the program boasts a roster of 77 TRAC Writing Fellows serving approximately 1,200 students in courses across the disciplines in all three undergraduate colleges. 
          Since its inception, the program has served over 120 faculty and instructors, and approximately 9,000 students.
            </h1>
            <header className="App-header">
              What is TRAC?
          </header>
          
          </body>
      </div>
      
    );
}

export default Fellows;
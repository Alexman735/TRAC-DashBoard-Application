import { useParams } from "react-router-dom";
import Navbar from './navbar'
import { useLocation } from 'react-router-dom'
function TRAC(props)
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
                What is TRAC?
            </header>
            <h1 className="App-textbox">
            The TRAC Writing Fellows program is based on the tried-and-true notion that collaboration among peers is one of our most effective and efficient methods of learning. 
            When motivated peers come together in focused effort toward a common end, the results can be uncommonly good, both in terms of the work produced and what is learned in the process.
            The program is also based on three other important guiding assumptions about writing itself. The first is that writing is a vital mode of learning that promotes intellectual engagement, active learning, and critical thinking. The second is that writing is a lifelong process that is never completely mastered, not by anyone.
            A better writer is a not only a better communicator, but a better thinker as well, and there’s always room for improvement. Third, all academic disciplines and their related professions have their own special kinds of writing that require special skills.
            </h1>
            <header className="App-header">
              History of TRAC
          </header>
            <h1 className="App-textbox">
            The TRAC Writing Fellows Program was launched in the fall of 2008 as a new initiative of Library and Technology Services to advance writing and communication instruction in courses across the curriculum at Lehigh. 
          In the first semester of the 2008-09 pilot year, 15 TRAC Writing Fellows worked with 10 members of the faculty from across all three undergraduate colleges. 
          The successful pilot program paved the way for substantial growth in just a few years. 
          As of the fall 2017 semester, the program boasts a roster of 77 TRAC Writing Fellows serving approximately 1,200 students in courses across the disciplines in all three undergraduate colleges. 
          Since its inception, the program has served over 120 faculty and instructors, and approximately 9,000 students.
            </h1>
          
          </body>
      </div>
      
    );
}

export default TRAC;
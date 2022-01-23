import logo from './TRAC.png';
import './App.css';
import Navbar from './navbar'
import TRAC from './TRAC';
import { BrowserRouter as Router, Redirect, Route, Routes } from 'react-router-dom';
import About from './about';
import Stats from './stats';
import ReDir from './redirect';
import Values from './values';
import Fellows from './fellows';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
            <Route path='/' element={<TRAC/>} />
            <Route path='/MoreInfo' element={<ReDir url="https://trac.web.lehigh.edu/"/>} />
            <Route path='/TRAC' element={<TRAC/>} />
            <Route path='/values' element={<Values/>} />
            <Route path='/fellows' element={<Fellows/>} />
            <Route path='/dashboard/:name' element={<About/>} />
            <Route path='/dashboard/:name/about' element={<About/>} />
            <Route path='/dashboard/:name/stats' element={<Stats/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import {Link} from 'react-router-dom';

function Navbar(props)
{
    let name = props.fellow;
    let aboutRoute = "/"+name+"/about";
    let statsRoute = "/"+name+"/stats";
    return (
        
        <nav className="navbar">
            <img src={props.logo} className="App-logo" alt="logo" />
            <div className="links">
                <Link to={aboutRoute}>About</Link>
                <Link to={statsRoute}>Stats</Link>
                <Link to="/TRAC">What is TRAC?</Link>
            </div>
        </nav>
    );
}

export default Navbar;
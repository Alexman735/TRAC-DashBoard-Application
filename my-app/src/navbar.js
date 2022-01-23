import {Link} from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import logo from './TRAC.png';
function Navbar(props)
{
    let location = useLocation();
    let pathName = location.pathname;
    return (
        
        <nav className="navbar">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="links">
                {
                    props.routes.map((route) => (
                        renderLink(pathName, route, props)
                    ))
                }
            </div>
        </nav>
    );
}

function renderLink(truePathName, route, props)
{

    
    if(truePathName === route.url)
    {
        return(
            <Link to={route.url} class="active">{route.name}</Link>
        )
    }
    else
    {
        return(
            <Link to={route.url}>{route.name}</Link>
        )
    }
    
}

export default Navbar;
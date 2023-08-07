import React from 'react'
import {Link,useLocation} from 'react-router-dom'
import {useHistory} from 'react-router'

const Navbar = (props) => {
    let history = useHistory();
    let location = useLocation();
    const handleLogout=()=>{
        localStorage.removeItem('token');
        props.showAlert("Logged out Successfully",'success');
        history.push('/login');
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" style={{fontFamily: `'Carattere', cursive`,fontSize:"27px"}}><i className="fas fa-university"></i>&nbsp;&nbsp;Royal King of India</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className= {`nav-link  ${location.pathname === '/' ? "active" :" "}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className= {`nav-link  ${location.pathname === '/about' ? "active" :" "}`} aria-current="page" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className= {`nav-link  ${location.pathname === '/user' ? "active" :" "}`} aria-current="page" to= {`${!localStorage.getItem('token') ?'/notfound':'/user'}`} >Your Account</Link>
                            </li>
                            
                        </ul>
                        {!localStorage.getItem('token')?<div className="d-flex">
                            <Link className="btn btn-primary mx-1 userBtn" to = "/login" role="button">Login</Link>
                            <Link className="btn btn-primary mx-1 userBtn" to = "/signup" role="button">Signup</Link>
                        </div> : <button className="btn userBtn" onClick={handleLogout}>Logout</button>}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

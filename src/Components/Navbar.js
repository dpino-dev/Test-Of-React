import React from 'react'
import { Link } from 'react-router-dom';


export const Navbar = () => {
    return (
        <nav className="navbar bg-dark" data-bs-theme="dark">
            <div className="container-fluid"> 
                <a className="navbar-brand">Welcome to this Web Site</a>
                <form className="d-flex" role="search">
                    <Link to={"/"}><button className="btn btn-outline-success" >Back</button></Link>
                </form>
            </div>
        </nav>
    )
}

export default Navbar;
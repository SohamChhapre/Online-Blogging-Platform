import React from 'react';
import {Link} from 'react-router-dom';

const Navbar=({authUser,removeauthuser})=>{
    return (
        <nav className="topbar topbar-inverse topbar-expand-md topbar-sticky">
        <div className="container">
          <div className="topbar-left">
            <button className="topbar-toggler">☰</button>
            <Link className="topbar-brand" to="/">
              <img className="logo-default" src={`${process.env.PUBLIC_URL}/assets/img/logo-navbar.png`} alt="logo" />
              <img className="logo-inverse" src={`${process.env.PUBLIC_URL}/assets/img/logo-white-navbar.png`}  alt="logo" />
            </Link>
          </div>

          <div className="topbar-right">
            <ul className="topbar-nav nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              {authUser && <li className="nav-item">
                <Link className="nav-link" to="/articles/create">Write new article</Link>
              </li> }
              
              { authUser && <li className="nav-item">
                <a className="nav-link" href="#">Hey { authUser.data.name}
                  <i className="fa fa-caret-down" />
                </a>
                <div className="nav-submenu">
                  <Link className="nav-link" to="/user/articles">My articles</Link>
                  <Link className="nav-link" style={{color:"red"}}  to="/" onClick={removeauthuser}>Logout</Link>
                </div>
              </li>
              }
              { !authUser && <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              }
              { !authUser &&
              <li className="nav-item">
                <Link className="nav-link" to="/signup">Signup</Link>
              </li> }
              { authUser &&
              <li className="nav-item">
                <Link className="nav-link" to="/community">Community</Link>
              </li> }
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;
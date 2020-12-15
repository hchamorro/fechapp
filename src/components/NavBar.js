import React from 'react';
import { Link } from 'react-router-dom';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className={'navbar-brand'} to="/">
        Home
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/list1"
              className={
                window.location.pathname === '/list1'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              List 1
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/list2"
              className={
                window.location.pathname === '/list2'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              List 2
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/list3"
              className={
                window.location.pathname === '/list3'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              List 3
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/list4"
              className={
                window.location.pathname === '/list4'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              List 4
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

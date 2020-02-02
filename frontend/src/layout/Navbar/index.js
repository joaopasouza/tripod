import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './styles.css';

function Navbar(props) {
  const { username } = props;

  const logout = () => {
    localStorage.removeItem('loggedIn');
    window.location.reload();
  };

  return (
    <nav className="navbar navbar-static-top" role="navigation">
      <button type="button" className="sidebar-toggle">
        <span className="sr-only">Alternar navegação</span>
      </button>

      <div className="navbar-custom-menu">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/profile">{username}</Link>
          </li>

          <li>
            <Link to="#0" onClick={logout}>
              Sair
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="main-sidebar">
      <section className="sidebar">
        <ul className="sidebar-menu" data-widget="tree">
          <li className="header">MENU PRINCIPAL</li>

          <li className="active">
            <Link to="/">
              <i className="fa fa-home"></i> <span>Home</span>
            </Link>
          </li>
        </ul>
      </section>
    </aside>
  );
}

export default Sidebar;

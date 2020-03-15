import React from 'react';
import { MenuItems } from '../lib/options/MenuItems';
import { Link } from 'react-router-dom';

export class DesktopMenu extends React.Component {
  render() {
    return (
      <div className="header-navbar navbar-expand-sm navbar navbar-horizontal navbar-fixed navbar-dark navbar-without-dd-arrow navbar-shadow" style={{ paddingBottom: 0, paddingTop: 0 }}>
        <div className="navbar-container main-menu-content" data-menu="menu-container">
          <ul className="nav navbar-nav" id="main-menu-navigation" data-menu="menu-navigation">
            {
              MenuItems.map((x, idx) => (
                <li className="nav-item" key={idx}>
                  <Link className="nav-link" to={x.to}>
                    <i className={x.icon}></i>
                    <span>{x.name}</span>
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    )
  }
}
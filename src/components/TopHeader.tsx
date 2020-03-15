import React from 'react';
import { Link } from 'react-router-dom';

export class TopHeader extends React.Component{
  render() {
    return (
      <nav
        className="header-navbar navbar-expand-md navbar navbar-with-menu navbar-without-dd-arrow navbar-static-top navbar-light navbar-brand-center">
        <div className="navbar-wrapper">
          <div className="navbar-header">
            <ul className="nav navbar-nav flex-row">
              <li className="nav-item mobile-menu d-md-none mr-auto">
                <Link className="nav-link nav-menu-main menu-toggle hidden-xs" to="/"><i className="ft-menu font-large-1"></i></Link></li>
              <li className="nav-item">
                <Link className="navbar-brand" to="/">
                  <img className="brand-logo" alt="modern admin logo"
                    src="https://pixinvent.com/modern-admin-clean-bootstrap-4-dashboard-html-template/app-assets/images/logo/logo.png" />
                  <h3 className="brand-text">Playground</h3>
                </Link>
              </li>
              <li className="nav-item d-md-none">
                <Link to="#" className="nav-link open-navbar-container" data-toggle="collapse" data-target="#navbar-mobile">
                  <i className="la la-ellipsis-v"></i>
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-container content">
            <div className="collapse navbar-collapse" id="navbar-mobile">
              <ul className="nav navbar-nav mr-auto float-left">
                <li className="dropdown nav-item mega-dropdown d-none d-lg-block">
                  <Link className="dropdown-toggle nav-link" to="/" data-toggle="dropdown">POS</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
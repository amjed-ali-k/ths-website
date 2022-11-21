/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import Nav from './Nav';

export function Header() {
  return (
    <div className="full-width-header">
      {/* Toolbar Start */}
      <div className="rs-toolbar">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="rs-toolbar-left">
                <div className="welcome-message">
                  <i className="fa fa-bank" />
                  <span>Welcome to Edulearn</span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="rs-toolbar-right">
                <div className="toolbar-share-icon">
                  <ul>
                    <li>
                      <a href="/">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fa fa-google-plus" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
                <a href="/" className="apply-btn">
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Toolbar End */}
      {/*Header Start*/}
      <header id="rs-header-2" className="rs-header-2">
        {/* Menu Start */}
        <div className="menu-area menu-sticky">
          <div className="container">
            <div className="row rs-vertical-middle">
              <div className="col-lg-3 col-md-12">
                <div className="logo-area">
                  <Link to="/">
                    <img src="images/images-logo.png" alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-9 col-md-12 relative">
                <div className="main-menu">
                  <a className="rs-menu-toggle">
                    <i className="fa fa-bars" />
                    Menu
                  </a>
                  <Nav />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Menu End */}
      </header>

      {/*Header End*/}
    </div>
  );
}

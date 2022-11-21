/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import { TopIcons } from '../../TopIcons';
import Nav from './Nav';

function HomeHeader() {
  return (
    <div className="full-width-header">
      {/* Toolbar Start */}

      <TopIcons />

      {/* Toolbar End */}
      {/*Header Start*/}
      <header id="rs-header" className="rs-header">
        {/* Header Top Start */}
        <div className="rs-header-top">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-12">
                <div className="header-contact">
                  <div id="info-details" className="widget-text">
                    <i className="glyph-icon flaticon-email" />
                    <div className="info-text">
                      <a href="mailto:info@domain.com">
                        <span>Mail Us</span>
                        info@domain.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="logo-area text-center">
                  <Link to="/">
                    <img src="images/images-logo.png" alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="header-contact pull-right">
                  <div id="phone-details" className="widget-text">
                    <i className="glyph-icon flaticon-phone-call" />
                    <div className="info-text">
                      <a href="tel:4155551234">
                        <span>Call Us</span>
                        +1234-567-890
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Header Top End */}
        {/* Menu Start */}
        <div className="menu-area menu-sticky">
          <div className="container">
            <div className="main-menu">
              <div className="row relative">
                <div className="col-sm-12">
                  {/* <div id="logo-sticky" class="text-center">
										<a href="index.html"><img src="images/logo.png" alt="logo"></a>
									</div> */}
                  <button className="rs-menu-toggle">
                    <i className="fa fa-bars" />
                    Menu
                  </button>
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

export default HomeHeader;

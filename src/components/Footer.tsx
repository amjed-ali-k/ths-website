import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      {/* Footer Start */}
      <footer id="rs-footer" className="bg3 rs-footer mt-0">
        <div className="container">
          {/* Footer Address */}
          <div>
            <div className="row footer-contact-desc">
              <div className="col-md-4">
                <div className="contact-inner">
                  <i className="fa fa-map-marker" />
                  <h4 className="contact-title">Address</h4>
                  <p className="contact-desc">
                    503 Old Buffalo Street
                    <br />
                    Northwest #205, New York-3087
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="contact-inner">
                  <i className="fa fa-phone" />
                  <h4 className="contact-title">Phone Number</h4>
                  <p className="contact-desc">
                    +3453-909-6565
                    <br />
                    +2390-875-2235
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="contact-inner">
                  <i className="fa fa-map-marker" />
                  <h4 className="contact-title">Email Address</h4>
                  <p className="contact-desc">
                    infoname@gmail.com
                    <br />
                    www.yourname.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Top */}
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-12">
                <div className="about-widget">
                  <img src="images/logo-footer.png" alt="Footer Logo" />
                  <p>
                    We create Premium Html Themes for more than three years. Our team goal is to
                    reunite the elegance of unique.
                  </p>
                  <p className="margin-remove">
                    We create Unique and Easy To Use Flexible Html Themes.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-12">
                <h5 className="footer-title">RECENT POSTS</h5>
                <div className="recent-post-widget">
                  <div className="post-item">
                    <div className="post-date">
                      <span>28</span>
                      <span>June</span>
                    </div>
                    <div className="post-desc">
                      <h5 className="post-title">
                        <a href="/">While the lovely valley team work</a>
                      </h5>
                      <span className="post-category">Keyword Analysis</span>
                    </div>
                  </div>
                  <div className="post-item">
                    <div className="post-date">
                      <span>28</span>
                      <span>June</span>
                    </div>
                    <div className="post-desc">
                      <h5 className="post-title">
                        <a href="/">I must explain to you how all this idea</a>
                      </h5>
                      <span className="post-category">Spoken English</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-12">
                <h5 className="footer-title">OUR SITEMAP</h5>
                <ul className="sitemap-widget">
                  <li className="active">
                    <Link to="/">
                      <i className="fa fa-angle-right" aria-hidden="true" />
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link to="/courses">
                      <i className="fa fa-angle-right" aria-hidden="true" />
                      Courses
                    </Link>
                  </li>

                  <li>
                    <Link to="/teachers">
                      <i className="fa fa-angle-right" aria-hidden="true" />
                      Teachers
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact">
                      <i className="fa fa-angle-right" aria-hidden="true" />
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-12">
                <h3 className="footer-title">FLICKR FEED</h3>
                <ul className="flickr-feed">
                  <li>
                    <a href="/">
                      <img src="images/flickr/1.jpg" alt="Project" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src="images/flickr/2.jpg" alt="Project" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src="images/flickr/3.jpg" alt="Project" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src="images/flickr/4.jpg" alt="Project" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src="images/flickr/5.jpg" alt="Project" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src="images/flickr/6.jpg" alt="Project" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="footer-share">
              <ul>
                <li>
                  <a href="/">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-google-plus" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-pinterest-p" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-vimeo" />
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="container">
            <div className="copyright">
              <p>© 2022 Amjed Ali. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer End */}
      {/* start scrollUp  */}
      <div id="scrollUp">
        <i className="fa fa-angle-up" />
      </div>
    </div>
  );
}

export default Footer;

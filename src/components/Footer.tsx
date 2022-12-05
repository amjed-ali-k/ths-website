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
                    THS Kuttippuram, Tirur Road,
                    <br />
                    Kuttipuram PO, Malappuram Dist - 679571
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="contact-inner">
                  <i className="fa fa-phone" />
                  <h4 className="contact-title">Contact Number</h4>
                  <p className="contact-desc">0494 2608692</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="contact-inner">
                  <i className="fa fa-map-marker" />
                  <h4 className="contact-title">Email Address</h4>
                  <p className="contact-desc">
                    thsktpm@gmail.com
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
                  <img src="images/images-logo-dark.jpg" alt="Footer Logo" />
                  <p>
                    We provide professional competence & technical training to the students. A
                    student who passes THS is awarded THSLC including a Trade certificate & NSQF
                    Level 2 certificate.
                  </p>
                  <p className="margin-remove">
                    We also inculcate social responsibility & ethical values to students.
                  </p>
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
              <div className="col-lg-6 col-md-12">
                <h3 className="footer-title">INSTAGRAM FEED</h3>
                <ul className="flickr-feed" style={{ height: '400px' }}>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `<iframe src="https://embedsocial.com/api/pro_hashtag/fa94dae9f618f5c95228a69edb2230367ab68b6a" width="100%" height="400px" frameborder="0" marginheight="0" marginwidth="0"></iframe>`,
                    }}
                  />
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

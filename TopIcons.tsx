export function TopIcons() {
  return (
    <div className="rs-toolbar">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="rs-toolbar-left">
              <div className="welcome-message">
                <i className="fa fa-bank" />
                <span>Welcome to THS Kuttipuram</span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="rs-toolbar-right">
              <div className="toolbar-share-icon">
                <ul>
                  <li>
                    <a
                      href="https://www.instagram.com/thskuttippuram/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                  {/* <li>
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
                  </li> */}
                </ul>
              </div>
              <a href="/contact" className="apply-btn">
                Contact us
              </a>
            </div>
          </div>{' '}
        </div>
      </div>
    </div>
  );
}

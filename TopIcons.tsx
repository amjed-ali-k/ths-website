export function TopIcons() {
  return (
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
          </div>{' '}
        </div>
      </div>
    </div>
  );
}

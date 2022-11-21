function Breadcrumbs({ title }: { title: string }) {
  return (
    <div className="rs-breadcrumbs bg7 breadcrumbs-overlay">
      <div className="breadcrumbs-inner">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="page-title">{title}</h1>
              <ul>
                <li>
                  <a className="active" href="/">
                    Home
                  </a>
                </li>
                <li>{title}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumbs;

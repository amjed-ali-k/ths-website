import Breadcrumbs from 'components/Breadcrumbs';

function courses() {
  return (
    <div>
      <Breadcrumbs title="Courses"></Breadcrumbs>
      <div id="rs-courses-3" className="rs-courses-3 sec-spacer">
        <div className="container">
          <div className="abt-title">
            <h2>OUR COURSES</h2>
          </div>
          <div className="gridFilter">
            <button className="active" data-filter="*">
              ALL
            </button>
            <button data-filter=".filter1">SCIENCE</button>
            <button data-filter=".filter2">BUSINESS</button>
            <button data-filter=".filter3">HUMANITIES</button>
            <button data-filter=".filter4">DIPLOMA</button>
          </div>
          <div className="row grid">
            <div className="col-lg-4 col-md-6 grid-item filter1">
              <div className="course-item">
                <div className="course-img">
                  <img src="images/courses/10.jpg" alt="" />
                  <span className="course-value">$450</span>
                  <div className="course-toolbar">
                    <h4 className="course-category">
                      <a href="/">Science</a>
                    </h4>
                    <div className="course-date">
                      <i className="fa fa-calendar" /> 28-06-2017
                    </div>
                    <div className="course-duration">
                      <i className="fa fa-clock-o" /> 4 year
                    </div>
                  </div>
                </div>
                <div className="course-body">
                  <div className="course-desc">
                    <h4 className="course-title">
                      <a href="courses-details.html">Computer Engineering</a>
                    </h4>
                    <p>
                      Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur
                      Aenean egestas a Nullam augue augue.
                    </p>
                  </div>
                </div>
                <div className="course-footer">
                  <div className="course-seats">
                    <i className="fa fa-users" /> 70 SEATS
                  </div>
                  <div className="course-button">
                    <a href="/">APPLY NOW</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 grid-item filter2">
              <div className="course-item">
                <div className="course-img">
                  <img src="images/courses/11.jpg" alt="" />
                  <span className="course-value">$450</span>
                  <div className="course-toolbar">
                    <h4 className="course-category">
                      <a href="/">Business</a>
                    </h4>
                    <div className="course-date">
                      <i className="fa fa-calendar" /> 28-06-2017
                    </div>
                    <div className="course-duration">
                      <i className="fa fa-clock-o" /> 4 year
                    </div>
                  </div>
                </div>
                <div className="course-body">
                  <div className="course-desc">
                    <h3 className="course-title">
                      <a href="courses-details.html">Business Management</a>
                    </h3>
                    <p>
                      Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur
                      Aenean egestas a Nullam augue augue.
                    </p>
                  </div>
                </div>
                <div className="course-footer">
                  <div className="course-seats">
                    <i className="fa fa-users" /> 70 SEATS
                  </div>
                  <div className="course-button">
                    <a href="/">APPLY NOW</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 grid-item filter4">
              <div className="course-item">
                <div className="course-img">
                  <img src="images/courses/12.jpg" alt="" />
                  <span className="course-value">$450</span>
                  <div className="course-toolbar">
                    <h4 className="course-category">
                      <a href="/">Diploma</a>
                    </h4>
                    <div className="course-date">
                      <i className="fa fa-calendar" /> 28-06-2017
                    </div>
                    <div className="course-duration">
                      <i className="fa fa-clock-o" /> 4 year
                    </div>
                  </div>
                </div>
                <div className="course-body">
                  <div className="course-desc">
                    <h3 className="course-title">
                      <a href="courses-details.html">Diploma Electrical</a>
                    </h3>
                    <p>
                      Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur
                      Aenean egestas a Nullam augue augue.
                    </p>
                  </div>
                </div>
                <div className="course-footer">
                  <div className="course-seats">
                    <i className="fa fa-users" /> 70 SEATS
                  </div>
                  <div className="course-button">
                    <a href="/">APPLY NOW</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 grid-item filter1">
              <div className="course-item">
                <div className="course-img">
                  <img src="images/courses/13.jpg" alt="" />
                  <span className="course-value">$450</span>
                  <div className="course-toolbar">
                    <h4 className="course-category">
                      <a href="courses-details.html">Science</a>
                    </h4>
                    <div className="course-date">
                      <i className="fa fa-calendar" /> 28-06-2017
                    </div>
                    <div className="course-duration">
                      <i className="fa fa-clock-o" /> 4 year
                    </div>
                  </div>
                </div>
                <div className="course-body">
                  <div className="course-desc">
                    <h4 className="course-title">
                      <a href="courses-details.html">Civil Engineering</a>
                    </h4>
                    <p>
                      Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur
                      Aenean egestas a Nullam augue augue.
                    </p>
                  </div>
                </div>
                <div className="course-footer">
                  <div className="course-seats">
                    <i className="fa fa-users" /> 70 SEATS
                  </div>
                  <div className="course-button">
                    <a href="/">APPLY NOW</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 grid-item filter3">
              <div className="course-item">
                <div className="course-img">
                  <img src="images/courses/14.jpg" alt="" />
                  <span className="course-value">$450</span>
                  <div className="course-toolbar">
                    <h4 className="course-category">
                      <a href="courses-details.html">Humanities</a>
                    </h4>
                    <div className="course-date">
                      <i className="fa fa-calendar" /> 28-06-2017
                    </div>
                    <div className="course-duration">
                      <i className="fa fa-clock-o" /> 4 year
                    </div>
                  </div>
                </div>
                <div className="course-body">
                  <div className="course-desc">
                    <h3 className="course-title">
                      <a href="/">Bachelor of Arts</a>
                    </h3>
                    <p>
                      Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur
                      Aenean egestas a Nullam augue augue.
                    </p>
                  </div>
                </div>
                <div className="course-footer">
                  <div className="course-seats">
                    <i className="fa fa-users" /> 70 SEATS
                  </div>
                  <div className="course-button">
                    <a href="/">APPLY NOW</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 grid-item filter2">
              <div className="course-item">
                <div className="course-img">
                  <img src="images/courses/15.jpg" alt="" />
                  <span className="course-value">$450</span>
                  <div className="course-toolbar">
                    <h4 className="course-category">
                      <a href="/">Business</a>
                    </h4>
                    <div className="course-date">
                      <i className="fa fa-calendar" /> 28-06-2017
                    </div>
                    <div className="course-duration">
                      <i className="fa fa-clock-o" /> 4 year
                    </div>
                  </div>
                </div>
                <div className="course-body">
                  <div className="course-desc">
                    <h3 className="course-title">
                      <a href="courses-details.html">Master of Business A.</a>
                    </h3>
                    <p>
                      Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur
                      Aenean egestas a Nullam augue augue.
                    </p>
                  </div>
                </div>
                <div className="course-footer">
                  <div className="course-seats">
                    <i className="fa fa-users" /> 70 SEATS
                  </div>
                  <div className="course-button">
                    <a href="/">APPLY NOW</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 grid-item filter4">
              <div className="course-item">
                <div className="course-img">
                  <img src="images/courses/16.jpg" alt="" />
                  <span className="course-value">$350</span>
                  <div className="course-toolbar">
                    <h4 className="course-category">
                      <a href="/">Diploma</a>
                    </h4>
                    <div className="course-date">
                      <i className="fa fa-calendar" /> 28-06-2017
                    </div>
                    <div className="course-duration">
                      <i className="fa fa-clock-o" /> 4 year
                    </div>
                  </div>
                </div>
                <div className="course-body">
                  <div className="course-desc">
                    <h3 className="course-title">
                      <a href="courses-details.html">Diploma in Computer</a>
                    </h3>
                    <p>
                      Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur
                      Aenean egestas a Nullam augue augue.
                    </p>
                  </div>
                </div>
                <div className="course-footer">
                  <div className="course-seats">
                    <i className="fa fa-users" /> 70 SEATS
                  </div>
                  <div className="course-button">
                    <a href="/">APPLY NOW</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 grid-item filter3 filter4">
              <div className="course-item">
                <div className="course-img">
                  <img src="images/courses/17.jpg" alt="" />
                  <span className="course-value">$450</span>
                  <div className="course-toolbar">
                    <h4 className="course-category">
                      <a href="courses-details.html">Humanities</a>
                    </h4>
                    <div className="course-date">
                      <i className="fa fa-calendar" /> 28-06-2017
                    </div>
                    <div className="course-duration">
                      <i className="fa fa-clock-o" /> 4 year
                    </div>
                  </div>
                </div>
                <div className="course-body">
                  <div className="course-desc">
                    <h4 className="course-title">
                      <a href="/">Master of Arts</a>
                    </h4>
                    <p>
                      Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur
                      Aenean egestas a Nullam augue augue.
                    </p>
                  </div>
                </div>
                <div className="course-footer">
                  <div className="course-seats">
                    <i className="fa fa-users" /> 70 SEATS
                  </div>
                  <div className="course-button">
                    <a href="/">APPLY NOW</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 grid-item filter1">
              <div className="course-item">
                <div className="course-img">
                  <img src="images/courses/18.jpg" alt="" />
                  <span className="course-value">$425</span>
                  <div className="course-toolbar">
                    <h4 className="course-category">
                      <a href="/">Science</a>
                    </h4>
                    <div className="course-date">
                      <i className="fa fa-calendar" /> 28-06-2017
                    </div>
                    <div className="course-duration">
                      <i className="fa fa-clock-o" /> 4 year
                    </div>
                  </div>
                </div>
                <div className="course-body">
                  <div className="course-desc">
                    <h3 className="course-title">
                      <a href="courses-details.html">Electronics Engineering</a>
                    </h3>
                    <p>
                      Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur
                      Aenean egestas a Nullam augue augue.
                    </p>
                  </div>
                </div>
                <div className="course-footer">
                  <div className="course-seats">
                    <i className="fa fa-users" /> 70 SEATS
                  </div>
                  <div className="course-button">
                    <a href="/">APPLY NOW</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default courses;

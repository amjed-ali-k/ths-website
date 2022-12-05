/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

function home() {
  return (
    <div>
      {/* Slider Area Start */}
      <div id="rs-slider" className="slider-overlay-2">
        <Carousel showArrows={true} infiniteLoop autoPlay showThumbs={false}>
          {/* Item 1 */}
          <div className="item active">
            <img src="images/cover-1.jpg" alt="Slide1" />
            <div className="slide-content">
              <div className="display-table">
                <div className="display-table-cell">
                  <div className="container text-center">
                    <h1
                      className="slider-title"
                      data-animation-in="fadeInLeft"
                      data-animation-out="animate-out"
                    >
                      Govt THS Kuttippuram
                    </h1>
                    <p
                      data-animation-in="fadeInUp"
                      data-animation-out="animate-out"
                      className="slider-desc"
                    >
                      Established 1980, under the Diratorate of technichal education, Govt of Kerala
                      {/* <br className="hidden-sm-dow" /> Nunc quis sapien in arcu pharetra
                      volutpat.Morbi nec vulputate dolor. */}
                    </p>
                    {/* <a
                      href="#"
                      className="sl-readmore-btn mr-30"
                      data-animation-in="lightSpeedIn"
                      data-animation-out="animate-out"
                    >
                      READ MORE
                    </a> */}
                    {/* <a
                      href="#"
                      className="sl-get-started-btn"
                      data-animation-in="lightSpeedIn"
                      data-animation-out="animate-out"
                    >
                      GET STARTED NOW
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Item 2 */}
          <div className="item">
            <img src="images/cover-2.jpg" alt="Slide2" />
            <div className="slide-content">
              <div className="display-table">
                <div className="display-table-cell">
                  <div className="container text-center">
                    <h1
                      className="slider-title"
                      data-animation-in="fadeInUp"
                      data-animation-out="animate-out"
                    >
                      Govt THS Kuttippuram
                    </h1>
                    <p
                      data-animation-in="fadeInUp"
                      data-animation-out="animate-out"
                      className="slider-desc"
                    >
                      We provide professional competence and technical training
                      {/* <br className="hidden-sm-dow" /> Nunc quis sapien in arcu pharetra
                      volutpat.Morbi nec vulputate dolor. */}
                    </p>
                    {/* <a
                      href="#"
                      className="sl-readmore-btn mr-30"
                      data-animation-in="fadeInUp"
                      data-animation-out="animate-out"
                    >
                      READ MORE
                    </a>
                    <a
                      href="#"
                      className="sl-get-started-btn"
                      data-animation-in="fadeInUp"
                      data-animation-out="animate-out"
                    >
                      GET STARTED NOW
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Item 3 */}
          <div className="item">
            <img src="images/cover-4.jpg" alt="Slide3" />
            <div className="slide-content">
              <div className="display-table">
                <div className="display-table-cell">
                  <div className="container text-center">
                    <h1
                      className="slider-title"
                      data-animation-in="fadeInUp"
                      data-animation-out="animate-out"
                    >
                      Govt THS Kuttippuram
                    </h1>
                    <p
                      data-animation-in="fadeInUp"
                      data-animation-out="animate-out"
                      className="slider-desc"
                    >
                      100 % success in tenth standered for the last 42 years
                    </p>
                    {/* <a
                      href="#"
                      className="sl-readmore-btn mr-30"
                      data-animation-in="fadeInUp"
                      data-animation-out="animate-out"
                    >
                      READ MORE
                    </a>
                    <a
                      href="#"
                      className="sl-get-started-btn"
                      data-animation-in="fadeInUp"
                      data-animation-out="animate-out"
                    >
                      GET STARTED NOW
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
      {/* Slider Area End */}
      {/* Services Start */}
      <div className="rs-services rs-services-style1">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="services-item rs-animation-hover">
                <div className="services-icon">
                  <i className="fa fa-american-sign-language-interpreting rs-animation-scale-up" />
                </div>
                <div className="services-desc">
                  <h4 className="services-title">Trending Courses</h4>
                  <p>Lorem ipsum dolor sit amet Sed nec molestie justo</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="services-item rs-animation-hover">
                <div className="services-icon">
                  <i className="fa fa-book rs-animation-scale-up" />
                </div>
                <div className="services-desc">
                  <h4 className="services-title">Books &amp; Liberary</h4>
                  <p>Lorem ipsum dolor sit amet Sed nec molestie justo</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="services-item rs-animation-hover">
                <div className="services-icon">
                  <i className="fa fa-user rs-animation-scale-up" />
                </div>
                <div className="services-desc">
                  <h4 className="services-title">Certified Teachers</h4>
                  <p>Lorem ipsum dolor sit amet Sed nec molestie justo</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="services-item rs-animation-hover">
                <div className="services-icon">
                  <i className="fa fa-graduation-cap rs-animation-scale-up" />
                </div>
                <div className="services-desc">
                  <h4 className="services-title">Certification</h4>
                  <p>Lorem ipsum dolor sit amet Sed nec molestie justo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Services End */}
      {/* About Us Start */}
      <div id="rs-about" className="rs-about sec-spacer">
        <div className="container">
          <div className="sec-title mb-50 text-center">
            <h2>ABOUT US</h2>
            <p>
              {/* Fusce sem dolor, interdum in fficitur at, faucibus nec lorem. Sed nec molestie justo. */}
            </p>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="about-img rs-animation-hover">
                <img src="images/about-about.jpg" alt="img02" />
                <a
                  className="popup-youtube rs-animation-fade"
                  href="https://www.youtube.com/watch?v=tzMpWiGL8D8"
                  title="Video Icon"
                ></a>
                <div className="overly-border" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="about-desc">
                <h3>Govt THS Kuttippuram</h3>
                <p>
                  Our institution is located in Kuttippuram town itself, spread over an area of 7
                  acres. Admission to the institution is only for 8th standard through an entrance
                  exam, for a sanctioned intake of 120 nos.
                </p>
              </div>
              <div id="accordion" className="rs-accordion-style1">
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <h3
                      className="acdn-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Our History
                    </h3>
                  </div>
                  <div
                    id="collapseOne"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordion"
                  >
                    <div className="card-body">
                      Government Technical High School Kuttippuram was established in 1980 under the
                      Directorate of Technical Education, Govt. of Kerala. We provide professional
                      competence & technical training to the students. A student who passes THS is
                      awarded THSLC including a Trade certificate & NSQF Level 2 certificate. We
                      also inculcate social responsibility & ethical values to students. Apart from
                      studies in General schools, we provide specialised training in the respective
                      trades ( Electrical, Automobile, Electronics, Turning & Fitting ) through
                      engineering subjects & workshop practices.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingTwo">
                    <h3
                      className="acdn-title collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Our Mission
                    </h3>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordion"
                  >
                    <div className="card-body">
                      There are many variations of passages of Lorem Ipsum available, but the
                      majority have suffered alteration in some form, by injected humour, or
                      randomised words which don't look even slightly believable.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header mb-0" id="headingThree">
                    <h3
                      className="acdn-title collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Our Vision
                    </h3>
                  </div>
                  <div
                    id="collapseThree"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordion"
                  >
                    <div className="card-body">
                      There are many variations of passages of Lorem Ipsum available, but the
                      majority have suffered alteration in some form, by injected humour, or
                      randomised words which don't look even slightly believable.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About Us End */}
      {/* Courses Start */}
      <div id="rs-courses" className="rs-courses sec-color sec-spacer">
        <div className="container">
          <div className="sec-title mb-50 text-center">
            <h2>OUR COURSES</h2>
            <p>
              Fusce sem dolor, interdum in fficitur at, faucibus nec lorem. Sed nec molestie justo.
            </p>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Carousel
                showArrows={false}
                showIndicators={false}
                autoPlay
                infiniteLoop
                showThumbs={false}
              >
                <div className="row">
                  <CourseCard
                    title="Electronics"
                    description="Electronics Engineering can be defined as the branch of engineering that utilises electrical components such as semiconductors, transistors, diodes and others to design Electronics circuits, devices, integrated circuits and electronic systems."
                    image="/images/electronics.jpg"
                  />
                  <CourseCard
                    title="Electrical wiring and Mainteneance of domestic appliances"
                    description="Electronics Engineering can be defined as the branch of engineering that utilises electrical components such as semiconductors, transistors, diodes and others to design Electronics circuits, devices, integrated circuits and electronic systems."
                    image="/images/home-appliances.jpg"
                  />
                  <CourseCard
                    title="Fitting"
                    description="Fitting includes the knowledge about fittings like Pipe fittings, Machine fitting, and structure fittings are the main working areas, on which a fitter works."
                    image="/images/fitter.jpg"
                  />
                </div>
                <div className="row">
                  <CourseCard
                    title="Turning"
                    description="Turning is a machining process in which a cutting tool, typically a non-rotary tool bit, describes a helix toolpath by moving more or less linearly while the workpiece rotates."
                    image="/images/turning.jpg"
                  />
                  <CourseCard
                    title="Automobile"
                    description="Automobile Engineering is the branch of engineering which deals with designing, manufacturing, mechanical mechanisms as well operations of automobiles. It is also an introduction to vehicle engineering which includes cars, motorcycles, trucks and buses etc.  "
                    image="/images/automobile.jpg"
                  />
                  <CourseCard
                    title="Welding"
                    description="A Welding Engineer work involves managing welding projects and supervising welding teams. He or she is responsible for reviewing welding procedures, processes and documentation. "
                    image="/images/welding.jpg"
                  />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      {/* Courses End */}
      {/* Counter Up Section Start*/}
      {/* <div className="rs-counter pt-100 pb-70 bg3">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="counter-content">
                <h2 className="counter-title">ACHEIVEMENTS</h2>
                <div className="counter-text">
                  <p>
                    A wonderful serenity has taken possession of my entire soul, like these sweet
                    mornings of spring which I enjoy with my whole heart like mine.
                  </p>
                </div>
                <div className="counter-img rs-image-effect-shine">
                  <img src="images/counter-1.jpg" alt="Counter Discussion" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 mt-80">
              <div className="row">
                <div className="col-md-6">
                  <div className="rs-counter-list">
                    <h2 className="counter-number plus">60</h2>
                    <h4 className="counter-desc">TEACHERS</h4>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="rs-counter-list">
                    <h2 className="counter-number plus">40</h2>
                    <h4 className="counter-desc">COURSES</h4>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="rs-counter-list">
                    <h2 className="counter-number plus">900</h2>
                    <h4 className="counter-desc">STUDENTS</h4>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="rs-counter-list">
                    <h2 className="counter-number plus">3675</h2>
                    <h4 className="counter-desc">Satisfied Client</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* Counter Down Section End */}
      {/* Events Start */}
      {/* <div id="rs-events" className="rs-events sec-spacer">
        <div className="container">
          <div className="sec-title mb-50 text-center">
            <h2>OUR UPCOMING EVENTS</h2>
            <p>
              I feel the presence of the Almighty, who formed us in his own image, and the breath.
            </p>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div
                className="rs-carousel owl-carousel"
                data-loop="true"
                data-items={3}
                data-margin={30}
                data-autoplay="false"
                data-autoplay-timeout={5000}
                data-smart-speed={1200}
                data-dots="true"
                data-nav="true"
                data-nav-speed="false"
                data-mobile-device={1}
                data-mobile-device-nav="true"
                data-mobile-device-dots="true"
                data-ipad-device={2}
                data-ipad-device-nav="true"
                data-ipad-device-dots="true"
                data-md-device={3}
                data-md-device-nav="true"
                data-md-device-dots="true"
              >
                <div className="event-item">
                  <div className="event-img">
                    <img src="images/events-1.jpg" alt="" />
                    <a
                      className="image-link"
                      href="events-details.html"
                      title="University Tour 2018"
                    >
                      <i className="fa fa-link" />
                    </a>
                  </div>
                  <div className="events-details sec-color">
                    <div className="event-date">
                      <i className="fa fa-calendar" />
                      <span>28 June 2017</span>
                    </div>
                    <h4 className="event-title">
                      <a href="events-details.html">PRACTICE WORKSHOP 2018</a>
                    </h4>
                    <div className="event-meta">
                      <div className="event-time">
                        <i className="fa fa-clock-o" />
                        <span>12.30AM-05.30PM</span>
                      </div>
                      <div className="event-location">
                        <i className="fa fa-map-marker" />
                        <span>Venue A, Main Campus</span>
                      </div>
                    </div>
                    <div className="event-btn">
                      <a href="#">
                        Join Event <i className="fa fa-angle-double-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="event-item">
                  <div className="event-img">
                    <img src="images/events-2.jpg" alt="" />
                    <a
                      className="image-link"
                      href="events-details.html"
                      title="University Tour 2018"
                    >
                      <i className="fa fa-link" />
                    </a>
                  </div>
                  <div className="events-details sec-color">
                    <div className="event-date">
                      <i className="fa fa-calendar" />
                      <span>28 April 2017</span>
                    </div>
                    <h4 className="event-title">
                      <a href="events-details.html">CAMPUS EXAMINATION ROOM</a>
                    </h4>
                    <div className="event-meta">
                      <div className="event-time">
                        <i className="fa fa-clock-o" />
                        <span>10.30AM-03.30PM</span>
                      </div>
                      <div className="event-location">
                        <i className="fa fa-map-marker" />
                        <span>Venue A, Main Campus</span>
                      </div>
                    </div>
                    <div className="event-btn">
                      <a href="#">
                        Join Event <i className="fa fa-angle-double-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="event-item">
                  <div className="event-img">
                    <img src="images/events-3.jpg" alt="" />
                    <a
                      className="image-link"
                      href="events-details.html"
                      title="University Tour 2018"
                    >
                      <i className="fa fa-link" />
                    </a>
                  </div>
                  <div className="events-details sec-color">
                    <div className="event-date">
                      <i className="fa fa-calendar" />
                      <span>28 June 2017</span>
                    </div>
                    <h4 className="event-title">
                      <a href="events-details.html">BEST GRADUATION CEREMONY</a>
                    </h4>
                    <div className="event-meta">
                      <div className="event-time">
                        <i className="fa fa-clock-o" />
                        <span>10.30AM-03.30PM</span>
                      </div>
                      <div className="event-location">
                        <i className="fa fa-map-marker" />
                        <span>Venue A, Main Campus</span>
                      </div>
                    </div>
                    <div className="event-btn">
                      <a href="#">
                        Join Event <i className="fa fa-angle-double-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* Events End */}
      {/* Calltoaction Start */}
      {/* <div id="rs-calltoaction" className="rs-calltoaction sec-spacer bg4">
        <div className="container">
          <div className="rs-cta-inner text-center">
            <div className="sec-title mb-50 text-center">
              <h2 className="white-color">WEB DESIGN &amp; DEVLOPMENT COURSE</h2>
              <p className="white-color">
                Fusce sem dolor, interdum in efficitur at, faucibus nec lorem.
              </p>
            </div>
            <a className="cta-button" href="#">
              Join Now
            </a>
          </div>
        </div>
      </div> */}
      {/* Calltoaction End */}
      {/* Latest News Start */}
      {/* <div id="rs-latest-news" className="rs-latest-news sec-spacer">
        <div className="container">
          <div className="sec-title mb-50 text-center">
            <h2>OUR LASTEST NEWS</h2>
            <p>
              Fusce sem dolor, interdum in efficitur at, faucibus nec lorem. Sed nec molestie justo.
            </p>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="news-normal-block">
                <div className="news-img">
                  <a href="#">
                    <img src="images/blog-1.jpg" alt="" />
                  </a>
                </div>
                <div className="news-date">
                  <i className="fa fa-calendar-check-o" />
                  <span>June 28, 2017</span>
                </div>
                <h4 className="news-title">
                  <a href="blog-details.html">
                    Those Other College Expenses You Aren't Thinking About
                  </a>
                </h4>
                <div className="news-desc">
                  <p>
                    Blandit rutrum, erat et egestas ultricies, dolor tortor egestas enim, quiste
                    rhoncus sem the purus eu sapien curabitur.Lorem Ipsum is therefore always free
                    from repetitionetc.
                  </p>
                </div>
                <div className="news-btn">
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="news-list-block">
                <div className="news-list-item">
                  <div className="news-img">
                    <a href="#">
                      <img src="images/blog-2.jpg" alt="" />
                    </a>
                  </div>
                  <div className="news-content">
                    <h5 className="news-title">
                      <a href="blog-details.html">While the lovely valley team work</a>
                    </h5>
                    <div className="news-date">
                      <i className="fa fa-calendar-check-o" />
                      <span>June 28, 2017</span>
                    </div>
                    <div className="news-desc">
                      <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="news-list-item">
                  <div className="news-img">
                    <a href="#">
                      <img src="images/blog-3.jpg" alt="" />
                    </a>
                  </div>
                  <div className="news-content">
                    <h5 className="news-title">
                      <a href="blog-details.html">I must explain to you how all this idea</a>
                    </h5>
                    <div className="news-date">
                      <i className="fa fa-calendar-check-o" />
                      <span>June 28, 2017</span>
                    </div>
                    <div className="news-desc">
                      <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="news-list-item">
                  <div className="news-img">
                    <a href="#">
                      <img src="images/blog-4.jpg" alt="" />
                    </a>
                  </div>
                  <div className="news-content">
                    <h5 className="news-title">
                      <a href="blog-details.html">I should be incapable of drawing a stroke</a>
                    </h5>
                    <div className="news-date">
                      <i className="fa fa-calendar-check-o" />
                      <span>June 28, 2017</span>
                    </div>
                    <div className="news-desc">
                      <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* Latest News End */}
      {/* Testimonial Start */}
      {/* <div id="rs-testimonial" className="rs-testimonial bg5 sec-spacer">
        <div className="container">
          <div className="sec-title mb-50 text-center">
            <h2 className="white-color">WHAT PEOPLE SAYS</h2>
            <p className="white-color">
              Fusce sem dolor, interdum in efficitur at, faucibus nec lorem. Sed nec molestie justo.
            </p>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Carousel showArrows={false} showIndicators={false} infiniteLoop showThumbs={false}>
                <div className="testimonial-item">
                  <div className="testi-img">
                    <img src="images/testimonial-1.jpg" alt="Jhon Smith" />
                  </div>
                  <div className="testi-desc">
                    <h4 className="testi-name">Luise Henrikes</h4>
                    <p>
                      Etiam non elit nec augue tempor gravida et sed velit. Aliquam tempus eget
                      lorem ut malesuada. Phasellus dictum est sed libero posuere dignissim.
                    </p>
                  </div>
                </div>
                <div className="testimonial-item">
                  <div className="testi-img">
                    <img src="images/testimonial-2.jpg" alt="Jhon Smith" />
                  </div>
                  <div className="testi-desc">
                    <h4 className="testi-name">Aliana D’suza</h4>
                    <p>
                      Tempor non elit nec augue nec gravida et sed velit. Aliquam tempus eget lorem
                      ut malesuada. Phasellus dictum est sed libero posuere dignissim.
                    </p>
                  </div>
                </div>
                <div className="testimonial-item">
                  <div className="testi-img">
                    <img src="images/testimonial-3.jpg" alt="Jhon Smith" />
                  </div>
                  <div className="testi-desc">
                    <h4 className="testi-name">Aliana D’suza</h4>
                    <p>
                      Tempor non elit nec augue nec gravida et sed velit. Aliquam tempus eget lorem
                      ut malesuada. Phasellus dictum est sed libero posuere dignissim.
                    </p>
                  </div>
                </div>
                <div className="testimonial-item">
                  <div className="testi-img">
                    <img src="images/testimonial-4.jpg" alt="Jhon Smith" />
                  </div>
                  <div className="testi-desc">
                    <h4 className="testi-name">Aliana D’suza</h4>
                    <p>
                      Tempor non elit nec augue nec gravida et sed velit. Aliquam tempus eget lorem
                      ut malesuada. Phasellus dictum est sed libero posuere dignissim.
                    </p>
                  </div>
                </div>
                <div className="testimonial-item">
                  <div className="testi-img">
                    <img src="images/testimonial-5.jpg" alt="Jhon Smith" />
                  </div>
                  <div className="testi-desc">
                    <h4 className="testi-name">Aliana D’suza</h4>
                    <p>
                      Tempor non elit nec augue nec gravida et sed velit. Aliquam tempus eget lorem
                      ut malesuada. Phasellus dictum est sed libero posuere dignissim.
                    </p>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div> */}
      {/* Testimonial End */}
    </div>
  );
}

export default home;

export const CourseCard = ({
  image,
  type = 'Technical',
  title,
  description,
  duration = '2 Year',
  intake = '20',
}: {
  image: string;
  type?: string;
  title: string;
  description: string;
  duration?: string;
  intake?: string;
}) => {
  return (
    <div className="col-md-4 cource-item">
      <div className="cource-img">
        <img src={image} alt="" />
        {/* <span className="course-value">$450</span> */}
      </div>
      <div className="course-body">
        <a href="#" className="course-category">
          {type}
        </a>
        <h4 className="course-title">
          <a href="courses-details.html">{title}</a>
        </h4>
        {/* <div className="review-wrap">
          <ul className="rating">
            <li className="fa fa-star"></li>
            <li className="fa fa-star"></li>
            <li className="fa fa-star"></li>
            <li className="fa fa-star"></li>
            <li className="fa fa-star-half-empty"></li>
          </ul>
          <span className="review">25 Reviews</span>
        </div> */}
        <div className="course-desc">
          <p>{description}</p>
        </div>
      </div>
      <div className="course-footer">
        <div className="course-time">
          <span className="label">Course Time</span>
          <span className="desc">{duration}</span>
        </div>
        <div className="course-student">
          <span className="label">Course Student</span>
          <span className="desc">{intake}</span>
        </div>
        {/* <div className="class-duration">
          <span className="label">Class Duration</span>
          <span className="desc">8:30-4:00</span>
        </div> */}
      </div>
    </div>
  );
};

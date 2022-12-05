function Courses() {
  return <div>Courses</div>;
}

export default Courses;

export const CourseCard = ({
  image,
  type = 'Technical',
  title,
  description,
  duration = '2 Year',
  intake = '20',
  className,
}: {
  image: string;
  type?: string;
  title: string;
  description: string;
  duration?: string;
  className?: string;
  intake?: string;
}) => {
  return (
    <div className={className}>
      <div className="cource-item">
        <div className="cource-img">
          <img src={image} alt="" />
          {/* <span className="course-value">$450</span> */}
        </div>
        <div className="course-body">
          <div
            className="cource-category"
            style={{
              textAlign: 'center',
            }}
          >
            {type}
          </div>
          <h4
            className="course-title"
            style={{
              textAlign: 'center',
            }}
          >
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
          <div className="course-">
            <span className="">Course Student</span>
            <span className="desc">{intake}</span>
          </div>
          {/* <div className="class-duration">
          <span className="label">Class Duration</span>
          <span className="desc">8:30-4:00</span>
        </div> */}
        </div>
      </div>
    </div>
  );
};

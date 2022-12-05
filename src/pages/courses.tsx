import Breadcrumbs from 'components/Breadcrumbs';
import { CourseCard } from 'components/Courses';

function courses() {
  return (
    <div>
      <Breadcrumbs title="Courses"></Breadcrumbs>
      <div id="rs-courses-3" className="rs-courses-3 sec-spacer">
        <div className="container">
          <div className="abt-title">
            <h2>OUR COURSES</h2>
          </div>
          {/* <div className="gridFilter">
            <button className="active" data-filter="*">
              ALL
            </button>
            <button data-filter=".filter1">SCIENCE</button>
            <button data-filter=".filter2">BUSINESS</button>
            <button data-filter=".filter3">HUMANITIES</button>
            <button data-filter=".filter4">DIPLOMA</button>
          </div> */}
          <div className="row grid">
            <div className="col-lg-4 col-md-6 grid-item filter1">
              <CourseCard
                className=""
                title="Electronics"
                description="Electronics Engineering can be defined as the branch of engineering that utilises electrical components such as semiconductors, transistors, diodes and others to design Electronics circuits, devices, integrated circuits and electronic systems."
                image="/images/electronics.jpg"
              />
            </div>
            <div className="col-lg-4 col-md-6 grid-item filter2">
              <CourseCard
                className=""
                title="Electrical wiring and Mainteneance of domestic appliances"
                description="Electronics Engineering can be defined as the branch of engineering that utilises electrical components such as semiconductors, transistors, diodes and others to design Electronics circuits, devices, integrated circuits and electronic systems."
                image="/images/home-appliances.jpg"
              />
            </div>
            <div className="col-lg-4 col-md-6 grid-item filter4">
              <CourseCard
                className=""
                title="Fitting"
                description="Fitting includes the knowledge about fittings like Pipe fittings, Machine fitting, and structure fittings are the main working areas, on which a fitter works."
                image="/images/fitter.jpg"
              />
            </div>
            <div className="col-lg-4 col-md-6 grid-item filter1">
              <CourseCard
                className=""
                title="Turning"
                description="Turning is a machining process in which a cutting tool, typically a non-rotary tool bit, describes a helix toolpath by moving more or less linearly while the workpiece rotates."
                image="/images/turning.jpg"
              />
            </div>
            <div className="col-lg-4 col-md-6 grid-item filter3">
              <CourseCard
                className=""
                title="Automobile"
                description="Automobile Engineering is the branch of engineering which deals with designing, manufacturing, mechanical mechanisms as well operations of automobiles. It is also an introduction to vehicle engineering which includes cars, motorcycles, trucks and buses etc.  "
                image="/images/automobile.jpg"
              />
            </div>
            <div className="col-lg-4 col-md-6 grid-item filter2">
              <CourseCard
                className=""
                title="Welding"
                description="A Welding Engineer work involves managing welding projects and supervising welding teams. He or she is responsible for reviewing welding procedures, processes and documentation. "
                image="/images/welding.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default courses;

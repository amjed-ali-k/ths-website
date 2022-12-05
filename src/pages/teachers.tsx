/* eslint-disable @typescript-eslint/no-explicit-any */
import Breadcrumbs from 'components/Breadcrumbs';
import { useQuery, gql } from '@apollo/client';

const GET_ALL_STAFGS = gql`
  query MyQuery {
    allStaffs {
      name
      photo {
        url
      }
      designation {
        name
      }
      id
      contactNumber
    }
  }
`;

function Teachers() {
  const { data } = useQuery(GET_ALL_STAFGS);
  return (
    <div>
      <Breadcrumbs title="Teachers"></Breadcrumbs>
      <div id="rs-team-2" className="rs-team-2 team-page sec-spacer">
        <div className="container">
          {/* <div className="gridFilter">
            <button className="active" data-filter="*">
              ALL
            </button>
            <button data-filter=".filter1">SCIENCE</button>
            <button data-filter=".filter2">BUSINESS STUDIES</button>
            <button data-filter=".filter3">ARTS</button>
            <button data-filter=".filter4">DIPLOMA</button>
          </div> */}
          <div className="row grid">
            {data?.allStaffs.map((e: any) => {
              return (
                <div key={e.id} className="col-lg-3 col-md-6 col-xs-6 grid-item filter2">
                  <div className="team-item">
                    <div className="team-img">
                      <a href="/">
                        <img src={e.photo.url} alt="" />
                      </a>
                      {/* <div className="social-icon">
                        <a href="/">
                          <i className="fa fa-facebook" />
                        </a>
                        <a href="/">
                          <i className="fa fa-twitter" />
                        </a>
                        <a href="/">
                          <i className="fa fa-google-plus" />
                        </a>
                        <a href="/">
                          <i className="fa fa-linkedin" />
                        </a>
                      </div> */}
                    </div>
                    <div className="team-body">
                      <a href="teachers-single.html">
                        <h3 className="name">{e.name}</h3>
                      </a>
                      <span className="designation">{e.designation.name}</span>{' '}
                      <p className="designation">{e?.contactNumber || 'N/A'}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teachers;

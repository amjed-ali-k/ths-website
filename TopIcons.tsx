/* eslint-disable @typescript-eslint/no-explicit-any */
import Marquee from 'react-fast-marquee';
import { useQuery, gql } from '@apollo/client';

const GET_ALL_NOTIFICATIONS = gql`
  query MyQuery {
    allNotifications {
      link
      title
      id
    }
  }
`;
export function TopIcons() {
  const { data } = useQuery(GET_ALL_NOTIFICATIONS);

  return (
    <div className="rs-toolbar">
      <div className="container">
        <div className="d-flex align-items-center">
          <div className="flex-shrink-0">
            <div className="rs-toolbar-left">
              <div className="welcome-message">
                <i className="fa fa-bank" />
                <span>Notifications :-</span>
              </div>
            </div>
          </div>
          <div className="flex-grow-1 mx-3 border-left border-white">
            <div className="rs-toolbar-right px-3 ">
              <Marquee gradient={false} className="text-white">
                {data?.allNotifications?.map((e: any) => (
                  <a key={e.id} href={e.link} className="mx-3 text-white" style={{}}>
                    {e.title}
                  </a>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

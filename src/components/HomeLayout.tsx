import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import HomeHeader from './HomeHeader';

function DefaultLayout() {
  return (
    <>
      <HomeHeader />
      <Outlet />
      <Footer />
    </>
  );
}

export default DefaultLayout;

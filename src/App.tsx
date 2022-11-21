import { useEffect } from 'react';

import Home from 'pages/home';
import Teachers from 'pages/teachers';
import Gallery from 'pages/gallery';
import Courses from 'pages/courses';
import { Routes, Route, useLocation } from 'react-router-dom';
import DefaultLayout from 'components/DefaultLayout';
import HomeLayout from 'components/HomeLayout';

function App() {
  const location = useLocation();
  useEffect(() => {
    const html = document.querySelector('html');
    if (html) {
      html.style.scrollBehavior = 'auto';
      window.scroll({ top: 0 });
      html.style.scrollBehavior = '';
    }
  }, [location.pathname]);

  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route element={<DefaultLayout />}>
        <Route path="teachers" element={<Teachers />} />
        <Route path="courses" element={<Courses />} />
        <Route path="gallery" element={<Gallery />} />
        {/* <Route path="teachers" element={<Teachers />} /> */}
      </Route>
    </Routes>
  );
}

export default App;

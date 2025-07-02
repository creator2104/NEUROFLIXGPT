// Layout.jsx
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
  return (
    <>
       <Header/>
      <main>
        <Outlet /> {/* Renders child route like Browse or MyList */}
      </main>
    </>
  );
};

export default Layout;

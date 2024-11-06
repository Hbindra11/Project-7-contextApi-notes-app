// This is a Layout component, using React's composable nature
import {Outlet} from "react-router-dom";
import Navbar from './Navbar';
const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        {/* The Outlet component is a placeholder for children components under this route */}
        <Outlet />
      </div>
    </>
  );
};

export default Layout;

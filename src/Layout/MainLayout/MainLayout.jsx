import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";

const MainLayout = () => {
  return (
    <div className=" max-w-screen-2xl mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;

MainLayout.propTypes = {
  props: PropTypes.any,
};

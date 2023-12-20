import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
          <Outlet></Outlet>
          asfdd
    </div>
  );
};

export default MainLayout;

MainLayout.propTypes = {
  props: PropTypes.any,
};

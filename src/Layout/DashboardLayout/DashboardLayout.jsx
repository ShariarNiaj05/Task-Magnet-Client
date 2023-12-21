import PropTypes from 'prop-types'
import { Outlet } from 'react-router-dom';
 
const DashboardLayout = () => {
 return (
    <div> 
         
       <Outlet></Outlet>
    </div>
 )
}
 
export default DashboardLayout
 
 
DashboardLayout.propTypes = {
 
 props: PropTypes.any, 
};
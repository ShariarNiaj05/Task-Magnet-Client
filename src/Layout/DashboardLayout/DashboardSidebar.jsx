import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const DashboardSidebar = () => {
  const { user, logOut } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Logout Successful",
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: `${error.message}`,
          text: "Something went wrong!",
        });
      });
  };

    return (
      
        <div className=" flex flex-col justify-between items-stretch bg-slate-200">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box md:w-52"
            >
              {navItem}
            </ul>
          </div>
        </div>
        <div className=" hidden md:flex md:flex-col justify-between items-center h-screen">
          <div className=" hidden md:flex h-2/3">
            <ul className=" px-1 flex flex-col items-center">{navItem}</ul>
          </div>
        </div>
            <div className="flex flex-col gap-3 items-center justify-center mx-auto ">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-24 rounded-full">
            <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
          </div>
        </div>
          {user?.email ? (
            <button
              onClick={handleLogOut}
              className=" btn bg-teal-600 hover:bg-green-800 text-white"
            >
              Logout
            </button>
          ) : (
            <Link
              to={"/login"}
              className="btn bg-teal-600 hover:bg-green-800 text-white"
            >
              Login
            </Link>
          )}
        </div>
      </div>
  );
};

const activeLinkStyle = ({ isActive, isPending }) =>
  isPending
    ? "pending"
    : isActive
    ? "bg-green-800 text-white rounded p-2"
    : " hover:bg-teal-600 hover:text-white rounded p-2";

const navItem = (
  <>
    <NavLink to={"/dashboard"} className={activeLinkStyle}>
      Task Management
    </NavLink>
    <NavLink to={"/dashboard/create-task"} className={activeLinkStyle}>
      Create New Task
    </NavLink>
    
  </>
);

export default DashboardSidebar;

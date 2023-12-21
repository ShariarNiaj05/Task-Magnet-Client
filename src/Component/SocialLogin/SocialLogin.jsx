import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import {  useNavigate } from "react-router-dom";
// import useAxiosSecure from "../../Hooks/useAxiosSecure";

import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
//   const location = useLocation();
  const navigate = useNavigate();
//   const axios = useAxiosSecure();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        {
          const loggedInUser = result.user;
          console.log(loggedInUser);
          //   const user = { email: loggedInUser.email };

          Swal.fire({
            icon: "success",
            title: "Login Successful",
            text: "Happy Journey",
          });
          navigate("/dashboard");
        }

        // navigate("/");
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
    <div>
      <button
        onClick={handleGoogleSignIn}
        className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all hover:bg-green-800 bg-teal-600 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
        data-ripple-dark="true"
      >
        <FaGoogle />
        Google
      </button>
    </div>
  );
};

export default SocialLogin;

import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
// import useAxiosSecure from "../../Hooks/useAxiosSecure";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const { signIn } = useAuth();
  // const location = useLocation();
  const navigate = useNavigate();
  // const axios = useAxiosSecure();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        // const user = { email };
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "Happy Journey",
        });
        navigate("/");
      })

      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: `${error.message}`,
          text: "Something went wrong!",
        });
      });
  };
  return (
    <div>
      <div className="  max-w-screen-2xl mx-auto border">
        <section>
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
            <div>
              <div className="w-full mx-auto  p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Sign in to Task Magnet
                </h2>
                <form onSubmit={handleLogin} className="mt-8 space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className={inputStyle}
                      placeholder="name@company.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className={inputStyle}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-5 py-3 text-base font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:ring-green-300 sm:w-auto dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    Login Now
                  </button>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    New to Task Magnet?{" "}
                    <Link
                      to={"/register"}
                      className="text-green-600 hover:underline dark:text-green-500"
                    >
                      Register
                    </Link>
                  </div>
                </form>
                <SocialLogin></SocialLogin>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const inputStyle =
  "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500";

export default Login;

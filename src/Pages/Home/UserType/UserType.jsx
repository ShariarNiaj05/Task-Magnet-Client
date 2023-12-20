import Lottie from "lottie-react";
import developers from "../../../assets/user/developers.json";
import banker from "../../../assets/user/banker.json";
import Students from "../../../assets/user/Students.json";
import Freelancers from "../../../assets/user/Freelancers.json";
import Businessman from "../../../assets/user/Businessman.json";

const UserType = () => {
  return (
    <div className=" my-5 mb-20">
      <h2 className=" text-center text-4xl font-bold mb-5">
        Diverse Users,{" "}
        <span className=" text-teal-600">One Powerful Platform</span>
      </h2>

      <div className=" max-w-screen-xl mx-auto flex flex-col md:flex-row flex-wrap gap-10 justify-center items-center">
        <div>
          <Lottie
            animationData={developers}
            loop={true}
            className=" h-48 w-48 mx-auto"
          />
          <span className={spanStyle}>Developers</span>
        </div>

        <div>
          <Lottie
            animationData={banker}
            loop={true}
            className=" h-48 w-48 mx-auto"
          />
          <span className={spanStyle}>Bankers</span>
              </div>
              
              <div>
          <Lottie
            animationData={Students}
            loop={true}
            className=" h-48 w-48 mx-auto"
          />
          <span className={spanStyle}>Students</span>
              </div>
              
              <div>
          <Lottie
            animationData={Freelancers}
            loop={true}
            className=" h-48 w-48 mx-auto"
          />
          <span className={spanStyle}>Freelancers</span>
              </div>
              

              <div>
          <Lottie
            animationData={Businessman}
            loop={true}
            className=" h-48 w-48 mx-auto"
          />
          <span className={spanStyle}>Businessman </span>
        </div>
      </div>
    </div>
  );
};

const spanStyle =
  "text-4xl font-bold text-center shadow-lg border border-green-800 px-2 rounded flex justify-center items-center";
export default UserType;

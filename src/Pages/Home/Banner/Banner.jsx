import taskAnimation from "../../../assets/banner/banner_animation.json";
import Lottie from "lottie-react";

const Banner = () => {
  return (
    <div className=" flex flex-col-reverse md:flex-row w-full p-5">
      <div className=" my-auto md:w-1/2">
        <h2 className=" text-4xl font-bold text-teal-600 mb-5">
          Unlock Your Productivity Potential with Task Magnet
        </h2>
        <p className=" text-base font-semibold mb-5">
          Welcome to Task Magnet, your all-in-one solution for seamless task
          management and productivity enhancement. Unleash the power of
          efficient organization and collaboration as Task Magnet becomes your
          guiding force in managing tasks effortlessly.
        </p>
        <button className=" btn bg-green-800 hover:bg-teal-600 text-white font-bold">Lets Explore</button>
      </div>
      <div className=" md:w-1/2">
        <Lottie animationData={taskAnimation} loop={true} />
      </div>
    </div>
  );
};

export default Banner;

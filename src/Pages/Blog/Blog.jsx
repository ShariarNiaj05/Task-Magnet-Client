const Blog = () => {
  return (
    <div className=" my-10">
      <h2 className=" text-center text-4xl font-bold mb-5">
        Explore Our <span className=" text-teal-600">Blog Post</span>
      </h2>

      <div className=" grid grid-cols-2 gap-5">
        <div className="hero shadow-lg">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://miro.medium.com/v2/resize:fit:1358/0*jwFceBiOmyWNNEaz"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-2xl font-bold">
                Mastering the Art of Time Blocking: A Guide for Ultimate
                Productivity
              </h1>
              <p className="py-6">
                Discover how time blocking can revolutionize your task
                management and boost productivity. Learn effective strategies
                and tips to make the most out of your schedule.
              </p>
              <button className="btn bg-teal-600 text-white">Read More</button>
            </div>
          </div>
              </div>
              

              <div className="hero shadow-lg">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://assets.website-files.com/634681057b887c6f4830fae2/6367ddcf2529d14dd234e809_62e988d92c773535b74a6a0b_Following%2520Daily%2520Routines.png"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-2xl font-bold">
              The Power of Task Prioritization: A Game-Changer for Your Daily Routine
              </h1>
              <p className="py-6">
              Explore the significance of task prioritization and discover techniques to efficiently organize and prioritize your to-do list for maximum impact.
              </p>
              <button className="btn bg-teal-600 text-white">Read More</button>
            </div>
          </div>
              </div>
              

              
              
      </div>
    </div>
  );
};

export default Blog;

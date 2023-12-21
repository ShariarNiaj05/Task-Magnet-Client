import { useForm } from "react-hook-form";
// import "./styles.css";

const CreateNewTask = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const taskInfo = {
      title: data.title,
      description: data.description,
      deadline: data.deadline,
      priority: data.priority,
    };

    console.log(taskInfo);
  };

  //   console.log(watch("example"));

  return (
    <div>
      <div>
        <h2 className=" text-center text-4xl font-bold mb-5">
          Create New Task <span className=" text-teal-600">To Do</span>
        </h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        {/* Task Title  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Task Title</span>
          </label>
          <input
            type="text"
            placeholder="Task Title"
            name="title"
            {...register("title", { required: true })}
            className="input input-bordered"
          />
          {errors.name && (
            <span className=" text-red-600">This field is required</span>
          )}
        </div>

        {/* Task Description */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Task Description</span>
          </label>
          <input
            type="text"
            placeholder="Task Description"
            name="description"
            {...register("description", { required: true })}
            className="input input-bordered"
          />
          {errors.name && (
            <span className=" text-red-600">This field is required</span>
          )}
        </div>

        {/* Task Deadline  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Task Deadline</span>
          </label>
          <input
            type="date"
            placeholder="Task Deadline"
            name="deadline"
            {...register("deadline", { required: true })}
            className="input input-bordered"
          />
          {errors.name && (
            <span className=" text-red-600">This field is required</span>
          )}
        </div>

        {/* Task Priority  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Task Priority</span>
          </label>

          <select {...register("priority")} className="input input-bordered">
            <option value="high">High</option>
            <option value="moderate">Moderate</option>
            <option value="low">Low</option>
          </select>

          {errors.name && (
            <span className=" text-red-600">This field is required</span>
          )}
        </div>

        <div className="form-control mt-6">
          <input
            type="submit"
            value="Add Task"
            className="btn bg-teal-600 hover:bg-green-800 text-white"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateNewTask;

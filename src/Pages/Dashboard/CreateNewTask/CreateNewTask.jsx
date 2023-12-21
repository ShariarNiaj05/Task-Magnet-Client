import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
// import "./styles.css";

const CreateNewTask = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
      const taskInfo = {
        email: user?.email,
      title: data.title,
      description: data.description,
      deadline: data.deadline,
        priority: data.priority,
      taskStatus: 'todo'
    };

      console.log(taskInfo);
      
      axiosSecure.put("/tasks", taskInfo).then((res) => {
        if (res.data.insertedId) {
          console.log("Task added to DB");
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Task Added in To Do List",
            showConfirmButton: false,
            timer: 1500,
          });
        }
    });
      
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

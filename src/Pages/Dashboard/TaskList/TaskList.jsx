import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { useForm } from "react-hook-form";

import Swal from "sweetalert2";
import { useDrag, useDrop } from "react-dnd";
import { Link } from "react-router-dom";

const TaskList = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();

  const {
    data: tasks = [],
    isLoading: taskLoading,
    refetch,
  } = useQuery({
    enabled: !!user?.email,
    queryKey: ["allTasks", user?.email],
    queryFn: async () => {
      const allTasks = await axiosSecure.get(`/tasks?email=${user?.email}`);
      return allTasks.data;
    },
  });

  // update task details
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.preventDefault();
    console.log(data);
    const taskInfo = {
      email: user?.email,
      title: data.title,
      description: data.description,
      deadline: data.deadline,
      priority: data.priority,
      taskStatus: "todo",
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

        refetch();
      }
    });
  };

  const [, drag] = useDrag({
    type: "TASK",
  });

  const [, drop] = useDrop({
    accept: "TASK",
    drop: (item) => handleTaskDrop(item.id, "todo"),
  });

  const [, dragOngoing] = useDrag({
    type: "TASK",
  });

  const [, dropOngoing] = useDrop({
    accept: "TASK",
    drop: (item) => handleTaskDrop(item.id, "ongoing"),
  });

  const [, dragCompleted] = useDrag({
    type: "TASK",
  });

  const [, dropCompleted] = useDrop({
    accept: "TASK",
    drop: (item) => handleTaskDrop(item.id, "completed"),
  });

  const handleUpdateTask = async (id) => {};
  const handleDelete = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        await axiosSecure.delete(`/tasks/${id}`);
        Swal.fire({
          title: "Deleted!",
          text: "One task has been deleted.",
          icon: "success",
        });
        refetch();
      }
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleTaskDrop = async (taskId, newStatus) => {
    try {
      await axiosSecure.patch(`/tasks/${taskId}`, { taskStatus: newStatus });
      refetch();
    } catch (error) {
      console.error("Error updating task status:", error);
    }
  };

  if (loading) return <p>Loading....</p>;

  const renderTask = (task) => (
    <>
      <h2>
        <span className="font-bold">Title:</span> {task.title}
      </h2>
      <p>
        <span className="font-bold">Description:</span> {task.description}
      </p>
      <p>
        <span className="font-bold">Deadline:</span> {task.deadline}
      </p>
      <p>
        <span className="font-bold">Priority:</span> {task.priority}
      </p>
      <div className=" flex justify-center w-full">
        <Link to={`/dashboard/update/${task._id}`}>
          <button
            
            className="text-3xl btn  bg-green-200"
          >
            <CiEdit />
          </button>
        </Link>

        <button
          onClick={() => handleDelete(task._id)}
          className="text-3xl btn  bg-red-200"
        >
          <MdDeleteForever />
        </button>
      </div>
    </>
  );

  return (
    <div className="mt-10 flex justify-evenly w-full">
      {/* Task to do */}
      <div ref={drop} className="p-2 shadow-lg w-1/3">
        <h2 className="font-bold text-2xl text-center">To Do</h2>
        <hr />
        <div>
          {tasks
            .filter((task) => task.taskStatus === "todo")
            .map((singleTask) => (
              <div key={singleTask._id} ref={drag} className="shadow-lg p-3">
                {renderTask(singleTask)}
              </div>
            ))}
        </div>
      </div>

      {/* Task ongoing */}
      <div ref={dropOngoing} className="p-2 shadow-lg w-1/3">
        <h2 className="font-bold text-2xl text-center">On Going</h2>
        <hr />
        <div>
          {tasks
            .filter((task) => task.taskStatus === "ongoing")
            .map((singleTask) => (
              <div
                key={singleTask._id}
                ref={dragOngoing}
                className="shadow-lg p-3"
              >
                {renderTask(singleTask)}
              </div>
            ))}
        </div>
      </div>

      {/* Task completed */}
      <div ref={dropCompleted} className="p-2 shadow-lg w-1/3">
        <h2 className="font-bold text-2xl text-center">Completed</h2>
        <hr />
        <div>
          {tasks
            .filter((task) => task.taskStatus === "completed")
            .map((singleTask) => (
              <div
                key={singleTask._id}
                ref={dragCompleted}
                className="shadow-lg p-3"
              >
                {renderTask(singleTask)}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TaskList;

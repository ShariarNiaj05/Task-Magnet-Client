import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import useTaskList from "../../../Hooks/useTaskList";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";

const TaskList = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();
  // const [taskList, taskLoading, refetch] = useTaskList()
  console.log(user?.email);

  const {
    data: task = [],
    isLoading: taskLoading,
    refetch,
  } = useQuery({
    enabled: !!user?.email,
    queryKey: ["allTaskToDo", user?.email],
    queryFn: async () => {
      const allTaskToDo = await axiosSecure.get(`/tasks?email=${user?.email}`);
      return allTaskToDo.data;
    },
  });
  if (loading) return <p>loading....</p>;

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              axiosSecure.delete(`/tasks/${id}`).then((res) => {
                if (res.data.deletedCount > 0) {
                  Swal.fire({
                    title: "Deleted!",
                    text: "One task has been deleted.",
                    icon: "success",
                  });
                  refetch();
                }
              });
            }
          });
    }
    
  return (
    <div className=" mt-10 flex justify-evenly w-full">
      {/* task to do  */}
      <div className=" p-2 shadow-lg w-1/3 ">
        <h2 className=" font-bold text-2xl text-center"> To Do </h2>
        <hr />
        <div>
          {task?.map((singleTask) => (
            <div key={singleTask._id} className=" shadow-lg p-3">
              <h2>
                {" "}
                <span className=" font-bold">Title:</span> {singleTask.title}
              </h2>
              <p>
                <span className=" font-bold">Description:</span>{" "}
                {singleTask.description}
              </p>
              <p>
                <span className=" font-bold">Deadline: </span>{" "}
                {singleTask.deadline}
              </p>
              <p>
                <span className=" font-bold">Priority:</span>{" "}
                {singleTask.priority}
              </p>
              <button onClick={() => handleDelete (singleTask._id)} className=" text-3xl btn flex justify-center w-full bg-red-200">
                <MdDeleteForever />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* task ongoing  */}
      <div>On Going</div>

      {/* task completed  */}
      <div>Completed</div>
    </div>
  );
};

export default TaskList;

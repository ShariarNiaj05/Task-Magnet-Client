import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import Swal from "sweetalert2";
// import { useDrag, useDrop } from "react-dnd";
// import { DragDropContext } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const TestDND = () => {
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
    
  useEffect(() => {
    refetch();
  }, [refetch]);

  const [testTasks, setTestTasks] = useState(tasks);

  const handleToDo = async (id) => {
    console.log(id);
    {
      await axiosSecure.patch(`/tasks/changeStatus/${id}`, {
        taskStatus: "todo",
      });
      Swal.fire({
        title: "Task Status Change!",
        text: "One task has been Updated.",
        icon: "success",
      });
      refetch();
    }
  };

  const handleOnGoing = async (id) => {
    console.log(id);
    {
      await axiosSecure.patch(`/tasks/changeStatus/${id}`, {
        taskStatus: "onGoing",
      });
      Swal.fire({
        title: "Task Status Change!",
        text: "One task has been Updated.",
        icon: "success",
      });
      refetch();
    }
  };

  const handleCompleted = async (id) => {
    console.log(id);
    {
      await axiosSecure.patch(`/tasks/changeStatus/${id}`, {
        taskStatus: "completed",
      });
      Swal.fire({
        title: "Task Status Change!",
        text: "One task has been Updated.",
        icon: "success",
      });
      refetch();
    }
  };

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
          <button className="text-3xl btn  bg-green-200">
            <CiEdit />
          </button>
        </Link>

        <button
          onClick={() => handleDelete(task._id)}
          className="text-3xl btn  bg-red-200"
        >
          <MdDeleteForever />
        </button>

        <button
          onClick={() => handleToDo(task._id)}
          className="btn  bg-slate-200"
        >
          To Do
        </button>

        <button
          onClick={() => handleOnGoing(task._id)}
          className="btn  bg-slate-200"
        >
          On Going
        </button>

        <button
          onClick={() => handleCompleted(task._id)}
          className="btn  bg-slate-200"
        >
          Completed
        </button>
      </div>
    </>
    );
    

    const handleDragEnd = async (result) => {

        console.log(result);
        const { source, destination, draggableId } = result;
    
        // If the task was dropped outside of any droppable
  if (!destination) {
    return;
  }

  // If the task was dropped in the same droppable and at the same index
  if (source.droppableId === destination.droppableId && source.index === destination.index) {
    return;
  }

  // Find the dragged task
  const draggedTask = tasks.find((task) => task._id === draggableId);

  // Update the task status in the backend
  await axiosSecure.patch(`/tasks/changeStatus/${draggedTask._id}`, {
    taskStatus: destination.droppableId,
  });

  // Refetch data after updating task status
  refetch();
      };

  return (
    <div className="mt-10 flex flex-col lg:flex-row flex-wrap justify-evenly w-full">
          <DragDropContext onDragEnd={handleDragEnd}>
        {/* Task to do */}
        <Droppable droppableId="todo" key="todo">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="p-2 shadow-lg lg:w-1/3"
            >
              <h2 className="font-bold text-2xl text-center">To Do</h2>
              <hr />
              {tasks
                .filter((task) => task.taskStatus === "todo")
                .map((singleTask, index) => (
                    <Draggable
                      key={singleTask._id}
                      draggableId={singleTask._id}
                      index={index}
                    >
                      
                          
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="shadow-lg p-3"
                        >
                          {renderTask(singleTask)}
                        </div>
                      )}
                    </Draggable>
                  ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>

        {/* On Going Column */}
        <Droppable droppableId="onGoing" key="onGoing">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="p-2 shadow-lg lg:w-1/3"
            >
              <h2 className="font-bold text-2xl text-center">On Going</h2>
              <hr />
              {tasks
                .filter((task) => task.taskStatus === "onGoing")
                .map((singleTask, index) => (
                  <Draggable
                    key={singleTask._id}
                    draggableId={singleTask._id}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="shadow-lg p-3"
                      >
                        {renderTask(singleTask)}
                      </div>
                    )}
                  </Draggable>
                ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>

        {/* Completed Column */}
        <Droppable droppableId="completed" key="completed">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="p-2 shadow-lg lg:w-1/3"
            >
              <h2 className="font-bold text-2xl text-center">Completed</h2>
              <hr />
              {tasks
                .filter((task) => task.taskStatus === "completed")
                .map((singleTask, index) => (
                  <Draggable
                    key={singleTask._id}
                    draggableId={singleTask._id}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="shadow-lg p-3"
                      >
                        {renderTask(singleTask)}
                      </div>
                    )}
                  </Draggable>
                ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default TestDND;

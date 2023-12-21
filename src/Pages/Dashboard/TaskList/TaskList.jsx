import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { useEffect, useState } from "react";

import axios from 'axios';


const TaskList = () => {
    const axiosSecure = useAxiosSecure();
    const user = useAuth()

   



    const { data: toDo = [], isLoading, refetch } = useQuery({
        // enabled: !!user?.email,
        queryKey: ["allTaskToDo", user?.email],
        queryFn: async () => {
          const allTaskToDo = await axiosSecure.get(`/tasks/${user?.email}`);
          return allTaskToDo.data;
        },
    });
    



    console.log(toDo);

    
  return (
    <div className=" mt-10 flex justify-evenly w-full">
      {/* task to do  */}
      <div className=" p-2 shadow-lg w-1/3 text-center">
        <h2 className=" font-bold text-2xl"> To Do </h2>
        <hr />
      </div>

      {/* task ongoing  */}
      <div>On Going</div>

      {/* task completed  */}
      <div>Completed</div>
    </div>
  );
};

export default TaskList;

import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useTaskList = () => {
    const {user, loading} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {
        data: taskList = [],
        isLoading: taskLoading,
        refetch,
      } = useQuery({
        enabled: !!user?.email,
        queryKey: ["TaskList", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/tasks?email=${user?.email}`);
          return res.data;
          },
        
      });
    
    return [taskList, taskLoading, refetch]
};

export default useTaskList;
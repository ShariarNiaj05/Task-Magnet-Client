import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "https://task-magnet-server.vercel.app",  //"http://localhost:5000"
//   withCredentials: true,
});

const useAxiosSecure = () => {
    

  return axiosSecure;
};

export default useAxiosSecure;
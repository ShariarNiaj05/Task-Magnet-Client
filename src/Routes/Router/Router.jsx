import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import Home from "../../Pages/Home/Home/Home";
import About from "../../Pages/About/About";
import Support from "../../Pages/Support/Support";
import Blog from "../../Pages/Blog/Blog";
import Login from "../../Component/Login/Login";
import Register from "../../Component/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import TaskManagement from "../../Pages/Dashboard/TaskManagement/TaskManagement";
import CreateNewTask from "../../Pages/Dashboard/CreateNewTask/CreateNewTask";
import EditTask from "../../Pages/Dashboard/EditTask/EditTask";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/support",
        element: <Support></Support>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: '/dashboard',
        element: <TaskManagement></TaskManagement>
      },
      {
        path: 'create-task',
        element: <CreateNewTask></CreateNewTask>
      },
      {
        path: 'update/:id',
        element: <EditTask></EditTask>
      },
    ]
  },
]);

export default router;

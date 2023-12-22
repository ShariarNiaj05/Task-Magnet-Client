import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { useParams } from "react-router-dom";

const EditTask = () => {
    const {id} = useParams()
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    console.log(id);
    const updateTask = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const title = form.get("title");
        const description = form.get("description");
        const deadline = form.get("deadline");
        const priority = form.get("priority");
        
        

        const taskInfo = {
            email: user?.email,
          title,
          description,
          deadline,
            priority,
          taskStatus: 'todo'
        };
    
          console.log(taskInfo);
          
        axiosSecure.put(`/tasks/${id}`, taskInfo)
            .then((res) => {
                console.log(res);

            if (res.data.modifiedCount > 0) {
              console.log("Task Updated");
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Task Updated",
                showConfirmButton: false,
                timer: 1500,
              });
                
              

              }
        });
          
      };
    
    return (
        <div>
            <form onSubmit={updateTask}  className="card-body">
        {/* Task Title  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Task Title</span>
          </label>
          <input
            type="text"
            placeholder="Task Title"
            name="title"
            
            className="input input-bordered"
          />
          
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
           
            className="input input-bordered"
          />
          
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
            
            className="input input-bordered"
          />
          
        </div>

        {/* Task Priority  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Task Priority</span>
          </label>

          <select name="priority"  className="input input-bordered">
            <option value="high">High</option>
            <option value="moderate">Moderate</option>
            <option value="low">Low</option>
          </select>

          
        </div>

        <div className="form-control mt-6">
          <input
            type="submit"
            value="Update Task"
            className="btn bg-teal-600 hover:bg-green-800 text-white"
          />
        </div>
          </form>
        </div>
    );
};

export default EditTask;
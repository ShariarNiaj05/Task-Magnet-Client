import CreateNewTask from "../CreateNewTask/CreateNewTask";
import TaskList from "../TaskList/TaskList";

const TaskManagement = () => {
  return (
    <div>
      {/* Create new task */}
          <CreateNewTask></CreateNewTask>
          
          {/* Task List  */}
          <TaskList></TaskList>
    </div>
  );
};

export default TaskManagement;

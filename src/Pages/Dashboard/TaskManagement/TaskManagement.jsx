import TaskList from "../TaskList/TaskList";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const TaskManagement = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <TaskList></TaskList>
      </div>
    </DndProvider>
  );
};

export default TaskManagement;

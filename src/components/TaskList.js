import { useContext } from "react";
import TaskShow from "./TaskShow";
import TasksContext from "../context/tasks";

function TaskList() {
  const { tasks } = useContext(TasksContext);
  const renderTasks = tasks.map((task) => {
    return <TaskShow key={task.id} task={task} />;
  });

  return <div>{renderTasks}</div>;
}

export default TaskList;

import { useContext, useState } from "react";
import "../styles.css";
import TasksContext from "../context/tasks";
function CreateTask() {
  const { createTask } = useContext(TasksContext);
  const [task, setTask] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(task);
    setTask("");
  };
  const handleChange = (e) => {
    setTask(e.target.value);
  };
  return (
    <>
      <div className="add-task-form">
        <form onSubmit={handleSubmit}>
          <label for="task">Task:</label>
          <input
            value={task}
            onChange={handleChange}
            type="text"
            id="task"
            name="task"
            placeholder="Enter task here"
            required
          />

          {/* <label for="date">Due Date:</label>
          <input type="date" id="date" name="date" required /> */}

          <button type="submit">Add Task</button>
        </form>
      </div>
    </>
  );
}

export default CreateTask;

import { useContext, useState } from "react";
import TasksContext from "../context/tasks";

function TaskEdit({ task, onSubmit }) {
  const [newTitle, setNewTitle] = useState(task.title);
  const { editById } = useContext(TasksContext);
  const handleChange = (event) => {
    setNewTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    editById(task.id, newTitle, task.complete);
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input type="text" onChange={handleChange} value={newTitle} />
      <button>Save</button>
    </form>
  );
}

export default TaskEdit;

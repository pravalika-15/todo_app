import { useState } from "react";

function TaskEdit({ task, onSubmit }) {
  const [newTitle, setNewTitle] = useState(task.title);
  const handleChange = (event) => {
    setNewTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(task.id, newTitle);
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

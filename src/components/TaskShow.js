import { useContext, useState } from "react";
import TaskEdit from "./TaskEdit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import TasksContext from "../context/tasks";

function TaskShow({ task, onDelete, onEdit, onComplete }) {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteById, taskComplete } = useContext(TasksContext);
  const handleDelete = () => {
    deleteById(task.id);
  };
  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    // onEdit(id, newTitle);
    setShowEdit(false);
  };

  const [completed, setCompleted] = useState(task.complete);

  function handleCheckboxChange(event) {
    const isChecked = event.target.checked;
    setCompleted(isChecked);
    taskComplete(task.id, task.title, isChecked);
    // console.log(event.target.checked);
    // console.log(completed);
    // console.log(completed);
    // setCompleted(event.target.checked);
  }

  let content = task.title;
  if (showEdit) content = <TaskEdit task={task} onSubmit={handleSubmit} />;

  return (
    <>
      <div className="card">
        <div className="card-header">
          <h4>
            <span className="check">
              <input
                checked={completed}
                onChange={handleCheckboxChange}
                type="checkbox"
              />
            </span>
            {content}
          </h4>
        </div>

        <div className="card-body">
          <div className="actions">
            <button onClick={handleEdit}>
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button onClick={handleDelete}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskShow;

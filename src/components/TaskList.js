import TaskShow from "./TaskShow";

function TaskList({ tasks, onEdit, onDelete, onComplete }) {
  const renderTasks = tasks.map((task) => {
    return (
      <TaskShow
        onEdit={onEdit}
        onComplete={onComplete}
        onDelete={onDelete}
        key={task.id}
        task={task}
      />
    );
  });

  return <div>{renderTasks}</div>;
}

export default TaskList;

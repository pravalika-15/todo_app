import { useEffect, useState } from "react";
import axios from "axios";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";
import "./styles.css";
function App() {
  const [tasks, setTasks] = useState([]);
  const fetchtasks = async () => {
    const response = await axios.get("http://localhost:3001/tasks");
    setTasks(response.data);
  };

  useEffect(() => {
    fetchtasks();
  }, []);
  const createTask = async (title) => {
    const response = await axios.post("http://localhost:3001/tasks", {
      title: title,
      complete: false,
    });
    const updatedTasks = [...tasks, response.data];
    setTasks(updatedTasks);
    console.log(tasks);
  };
  const deleteById = async (id) => {
    axios.delete(`http://localhost:3001/tasks/${id}`);
    const updatedTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(updatedTasks);
  };

  const editById = async (id, newTitle) => {
    const response = axios.put(`http://localhost:3001/tasks/${id}`, {
      title: newTitle,
    });
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, ...response.data };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  const taskComplete = async (id, title, complete) => {
    const response = axios.put(`http://localhost:3001/tasks/${id}`, {
      title: title,
      complete: complete,
    });

    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, ...response.data };
      }
      return task;
    });

    setTasks(updatedTasks);
  };
  return (
    <div className="App">
      <CreateTask onCreate={createTask} />
      <TaskList
        onEdit={editById}
        onComplete={taskComplete}
        onDelete={deleteById}
        tasks={tasks}
      />
    </div>
  );
}

export default App;

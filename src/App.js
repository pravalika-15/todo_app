import { useContext, useEffect } from "react";

import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";
import "./styles.css";
import TasksContext from "./context/tasks";
function App() {
  const { fetchtasks } = useContext(TasksContext);
  useEffect(() => {
    fetchtasks();
  }, []);
  return (
    <div className="App">
      <CreateTask />
      <TaskList />
    </div>
  );
}

export default App;

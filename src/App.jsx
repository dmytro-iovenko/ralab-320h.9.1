import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import tasks from "./data/todos";

function App() {
  return (
    <>
      <h2>Create Todo List</h2>
      <AddTaskForm />
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;

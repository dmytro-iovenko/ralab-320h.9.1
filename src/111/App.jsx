import { useReducer, useRef } from "react";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import initialState from "./data/todos";
import todoReducer from "./utils/todoReducer";


function AddTaskInput(props, ref) {
  return <input type="text" placeholder="Add task" {...props} ref={ref} />;
}

function AddButton({ taskRef, dispatch }) {
  function handleClick(e) {
    e.preventDefault();
    const title = taskRef.current.value;
    taskRef.current.value = "";
    dispatch({ type: "add", payload: { title } });
  }
  return <button onClick={handleClick}>Add</button>;
}

function AddTaskForm({ dispatch }) {
  let newTaskRef = useRef(null);
  return (
    <section>
      <AddTaskInput ref={newTaskRef} />
      <AddButton taskRef={newTaskRef} dispatch={dispatch} />
    </section>
  );
}

function TaskList({ tasks, dispatch }) {
  console.log(tasks);
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} dispatch={dispatch}/>
      ))}
    </ul>
  );
}

function EditTask({ task, dispatch }) {
  let refTaskTitle = useRef(task.title);
  return (
    <>
      <input type="text" defaultValue={task.title} ref={refTaskTitle} />
      <button onClick={() => dispatch({ type: "save", payload: { id: task.id, title: refTaskTitle.current.value } })}>
        Save
      </button>
    </>
  );
}

function NormalTask({ task, dispatch }) {
  return (
    <>
      <label htmlFor={task.id}>{task.title}</label>
      <button onClick={() => dispatch({ type: "edit", payload: { id: task.id } })}>Edit</button>
      <button onClick={() => dispatch({ type: "delete", payload: { id: task.id } })}>Delete</button>
    </>
  );
}

function TaskItem({ task, dispatch }) {
  return (
    <li>
      <input
        type="checkbox"
        id={task.id}
        checked={task.completed}
        onChange={() => dispatch({ type: "complete", payload: { id: task.id, completed: !task.completed } })}
      />
      {task.edit ? <EditTask task={task} dispatch={dispatch} /> : <NormalTask task={task} dispatch={dispatch} />}
    </li>
  );
}

function App() {
  const [tasks, dispatch] = useReducer(todoReducer, initialState);
  return (
    <>
      <h2>Create Todo List</h2>
      <AddTaskForm dispatch={dispatch} />
      <TaskList tasks={tasks} dispatch={dispatch} />
    </>
  );
}

export default App;

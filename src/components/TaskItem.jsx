import { useRef } from "react";

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

export default function TaskItem({ task, dispatch }) {
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

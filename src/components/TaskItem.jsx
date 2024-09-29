function EditTask({ task, dispatch }) {
  return (
    <>
      <input type="text" value={task.title} />
      <button>Save</button>
    </>
  );
}

function SaveTask({ task, dispatch }) {
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
      {task.edit ? <EditTask task={task} dispatch={dispatch} /> : <SaveTask task={task} dispatch={dispatch} />}
    </li>
  );
}

export default function TaskItem({ task, dispatch }) {
  return (
    <li>
      <input
        type="checkbox"
        id={task.id}
        checked={task.completed}
        onChange={() => dispatch({ type: "complete", payload: { id: task.id, completed: !task.completed } })}
      />
      <label htmlFor={task.id}>{task.title}</label>
      <button>Edit</button>
      <button onClick={() => dispatch({ type: "delete", payload: { id: task.id } })}>Delete</button>
    </li>
  );
}

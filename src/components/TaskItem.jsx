export default function TaskItem({ task }) {
  return (
    <li>
      <input type="checkbox" id={task.id} checked={task.completed}/>
      <label htmlFor={task.id}>{task.title}</label>
      <button>Edit</button>
      <button>Delete</button>
    </li>
  );
}

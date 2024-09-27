export default function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <input type="checkbox" id="task" />
          <label htmlFor="task">Create Mockup</label>
          <button>Edit</button>
          <button>Delete</button>
        </li>
      ))}
    </ul>
  );
}

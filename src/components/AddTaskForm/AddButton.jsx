export default function AddButton({ taskRef, dispatch }) {
  function handleClick(e) {
    e.preventDefault();
    const title = taskRef.current.value;
    taskRef.current.value = "";
    dispatch({ type: "add", payload: { title } });
  }
  return <button onClick={handleClick}>Add</button>;
}

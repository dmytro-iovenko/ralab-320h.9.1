export default function reducer(state, { type, payload }) {
  console.log(type, state);
  switch (type) {
    case "complete":
      return state.map((task) => {
        task.id === payload.id && (task.completed = payload.completed);
        return task;
      });
    case "delete":
      return state.filter((task) => task.id !== payload.id);
    case "edit":
      return state.map((task) => {
        task.id === payload.id && (task.edit = true);
        return task;
      });
  }
  return state;
}

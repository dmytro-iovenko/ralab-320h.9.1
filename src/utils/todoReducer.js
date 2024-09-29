export default function reducer(state, { type, payload }) {
  console.log(type, state);
  switch (type) {
    case "completed":
      return state.map((task) => {
        task.id === payload.id && (task.completed = payload.completed);
        return task;
      });
  }
  return state;
}

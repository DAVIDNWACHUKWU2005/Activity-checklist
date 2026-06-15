function TaskInput({ dispatch }) {
  function handleSubmit(event) {
    event.preventDefault();

    const title = event.target.task.value;

    if (title.trim() === "") return;

    dispatch({
      type: "create",
      title: title
    });

    event.target.reset();
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="task"
        placeholder="Enter your new task"
        className="task-placeholder"
      />

      <button type="submit" className="submit-btn">
        Add
      </button>
    </form>
  );
}

export default TaskInput


function TaskInput() {
    return(
     
        <form className ="Task-form">
            <input 
            type = "text"
            placeholder = "Enter your new task"
            className="task-placeholder"
            />
            <button type = "submit" className="submit-btn">
                add 
            </button>
        </form>
    )
}
export default TaskInput;
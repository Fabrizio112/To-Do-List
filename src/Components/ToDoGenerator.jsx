function ToDoGenerator({ handleListChange }) {

    return (
        <form onSubmit={handleListChange} id="todo-generator">
            <input name="task" placeholder="Write here your task" />
            <button className="btn">Add ToDo</button>
        </form>
    );
}

export default ToDoGenerator;
function ToDoGenerator({ handleListChange }) {

    return (
        <form onSubmit={handleListChange} id="todo-generator">
            <textarea name="task" placeholder="Write here your task"></textarea>
            <button className="btn">Generate ToDo</button>
        </form>
    );
}

export default ToDoGenerator;
import { useRef, useState } from "react";

function ToDoCard({ el, handleDelete, handleUpdate }) {
    const [editable, setEditable] = useState(false)

    const { todo, id } = el

    const [todoEdit, setTodoEdit] = useState(todo)

    const handleChange = (e) => {
        setTodoEdit(e.target.value)
    }
    const handleEdit = () => {
        editable ? setEditable(false) : setEditable(true)
    }
    return (
        <aside id="todo-card">
            {editable ? <textarea className="editable" value={todoEdit} onChange={handleChange} /> : <p className="no-editable">{todo}</p>}
            <div>
                {editable ? <button className="btn update" onClick={() => { handleUpdate({ todo: todoEdit, id }), handleEdit() }}><i class="fa-solid fa-check fa-2xl" style={{ color: "#ffffff;" }}></i></button> : <>
                    <button className="btn trash" onClick={() => handleDelete(id)}><i className="fa-solid fa-trash-can fa-lg" style={{ color: "#ffffff" }}></i></button>
                    <button className="btn edit" onClick={handleEdit}><i className="fa-solid fa-pen-to-square fa-lg" style={{ color: "#ffffff" }}></i></button></>}

            </div>
        </aside>

    );
}

export default ToDoCard;
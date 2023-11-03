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
                {editable ? <button className="btn" onClick={() => { handleUpdate({ todo: todoEdit, id }), handleEdit() }}>Actualizar Tarea</button> : <>
                    <button className="btn" onClick={() => handleDelete(id)}>Eliminar</button>
                    <button className="btn" onClick={handleEdit}>Editar</button></>}

            </div>
        </aside>

    );
}

export default ToDoCard;
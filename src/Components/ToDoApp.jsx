import { useState } from "react";
import ToDoGenerator from "./ToDoGenerator";
import ToDoCard from "./ToDoCard";
import { useDispatch, useSelector } from "react-redux";
import { addToDo, deleteToDo, updateToDo } from "../store/toDoListSlice";

function ToDoApp() {

    const dispatch = useDispatch()
    const todo = useSelector(state => state.todo)


    const handleListChange = (e) => {
        e.preventDefault()
        if (e.target.firstChild.value.length === 0) return
        let textarea = e.target.firstChild
        let id = Date.now()
        dispatch(addToDo({ todo: e.target.task.value, id }))
        textarea.value = ""
    }
    const handleDelete = (id) => {
        dispatch(deleteToDo(id))

    }
    const handleUpdate = (todoEdited) => {
        dispatch(updateToDo(todoEdited))
    }

    return (<>
        <h1>To-Do App</h1>
        <ToDoGenerator handleListChange={handleListChange} />
        <section id="container-cards">
            {todo.length != 0 && todo.map((el) => <ToDoCard key={el.id} el={el} handleDelete={handleDelete} handleUpdate={handleUpdate} />)}
        </section>
    </>);
}

export default ToDoApp;
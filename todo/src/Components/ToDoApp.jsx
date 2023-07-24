import { useState } from "react";
import ToDoGenerator from "./ToDoGenerator";
import ToDoCard from "./ToDoCard";

function ToDoApp() {
    const [list, setList] = useState([])

    const handleListChange = (e) => {
        e.preventDefault()
        let id = Date.now()
        setList([...list, { todo: e.target.task.value, id }])
    }
    const handleDelete = (id) => {
        let elementToDelete = list.filter((el) => el.id != id)
        setList([...elementToDelete])

    }
    const handleUpdate = (id, todoEdit) => {
        let prreke = list.find((el) => {
            if (el.id === id) {
                el.todo = todoEdit
            }
        })
        console.log(prreke)
    }
    return (<>
        <h1>To-Do App</h1>
        <ToDoGenerator handleListChange={handleListChange} />
        <section id="container-cards">
            {list.length != 0 && list.map((el) => <ToDoCard key={el.id} el={el} handleDelete={handleDelete} handleUpdate={handleUpdate} />)}
        </section>
    </>);
}

export default ToDoApp;
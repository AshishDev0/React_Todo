import { useState } from "react"

const CreateTodo = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const addTodo = () => {
        fetch("http://localhost:3000/todo", {
            method: 'POST',
            body: JSON.stringify({
                title,
                description
            }),
            headers: {
                "Content-type": "application/json"
            }
        })
    }

    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    return (
        <div>
            <input onInput={(e) => handleChange(e)} type="text" placeholder="title" /> <br /><br />
            <input onInput={e => setDescription(e.target.value)} type="text" placeholder="description" /> <br /><br />

            <button onClick={addTodo}>Add a todo</button>
        </div>
    )
}

export default CreateTodo;
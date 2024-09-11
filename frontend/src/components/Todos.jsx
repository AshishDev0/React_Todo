export const Todos = ({ todos }) => {

    const markCompleted = (id) => {
        fetch("http://localhost:3000/completed", {
            method: "PUT",
            body: JSON.stringify({
                id
            }),
            headers: {
                "Content-type": "application/json"
            }
        })
    }

    return (
        <div>
            {todos.map((todo) => (
                <div key={todo._id}>
                    <h2>{ todo.title }</h2>
                    <h3>{ todo.description }</h3>
                    <button onClick={() => markCompleted(todo._id)}>{ todo.completed ? 'Completed' : 'Mark as completed' }</button>
                </div>
            ))}
        </div>
    )
}
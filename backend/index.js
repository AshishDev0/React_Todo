const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors())

app.post("/todo", async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if (!parsedPayload) {
        res.status(411).json({
            msg: "You sent the wrong inputs!"
        })
        return;
    }

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo created!"
    })
})

app.get("/todos", async (req, res) => {
    const todos = await todo.find({});

    res.json({
        todos
    })
})

app.put("/completed", async (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if (!parsedPayload) {
        res.status(411).json({
            msg: "You sent the wrong inputs!"
        })
    }

    await todo.updateOne({
        _id: updatePayload.id
    }, {
        completed: true
    })

    res.json({
        msg: "Todo marked as completed!"
    })
})

app.listen(3000, () => {
    console.log("App listening on port " + 3000);
})
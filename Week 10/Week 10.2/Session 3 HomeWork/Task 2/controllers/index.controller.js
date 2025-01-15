const helloController = (req, res)=> {
    res.json({message : "Hello World"});
};

const todos = [];

const getTodos = (req, res)=> {
    res.json(todos);
}

const createTodo = (req, res)=> {
    const { text, completed} = req.body;

    if(!text){
        return res.status(400).json({ error : "Text is Required"});
    }

    const newTodo = { text, completed : completed || false};
    todos.push(newTodo);

    res.status(201).json(newTodo);
}

module.exports = {helloController , getTodos, createTodo};
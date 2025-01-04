import React, { useState } from "react";

const TodoList = () => {
  const [todo, setTodo] = useState([]);
  const [inputVal, setInputVal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputVal.trim()){
      setTodo([...todo, inputVal]);
      setInputVal("");
    }

  };
  
  const handleChange = (e) => {
    setInputVal(e.target.value);
  };

  const handleDelete = (id) => {
    setTodo([...todo.slice(0, id),...todo.slice(id + 1)]);
  };

  return (
    <div>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <div className="flex gap-4">
          <label htmlFor="todo">Enter a Todo</label>
          <input
            type="text"
            className="rounded-lg bg-slate-400 placeholder:text-white px-2"
            value = {inputVal}
            onChange={handleChange}
            placeholder="Add a new Todo"
          />
        </div>
        <button type="submit" className="rounded-md bg-blue-500 text-white">
          Add Todo
        </button>
        
      </form>
      <ul>
        {todo.map((item, index) => (
          <li key={index} className="flex flex-col py-3 items-center">{item} <button className="py-1 px-2 rounded-md bg-red-500 text-white" onClick={()=>handleDelete(index)}>
          Remove Todo
        </button></li>
          
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

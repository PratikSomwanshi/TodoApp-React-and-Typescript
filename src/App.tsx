import React, { useState } from "react";
import "../src/App.css";
import InputField from "./components/InputField";

import TodoList from "./components/TodoList";

const App: React.FC = () => {
    const [todo, setTodo] = useState<string>("");
    const [todos, setTodos] = useState<Todo[]>([]);

    const handleAdd = (eve: React.FormEvent<EventTarget>) => {
        eve.preventDefault();

        if (todo) {
            setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
            setTodo("");
        }
    };

    console.log(todos);

    return (
        <div className="App">
            <span className="heading">Task Manager</span>
            <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
            <TodoList todos={todos} setTodos={setTodos} />
        </div>
    );
};

export default App;

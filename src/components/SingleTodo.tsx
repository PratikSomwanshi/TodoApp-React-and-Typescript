import React, { useState } from "react";
import { FiEdit3 } from "react-icons/fi";
import { TiDelete } from "react-icons/ti";
import { MdOutlineDownloadDone } from "react-icons/md";

type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    key: number;
};

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos, key }) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);

    const handleDone = (id: number) => {
        setTodos(
            todos.map((todo) => {
                return todo.id === id
                    ? { ...todo, isDone: !todo.isDone }
                    : todo;
            })
        );
    };

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const handleEdit = (eve: React.FormEvent, id: number) => {
        eve.preventDefault();
        setTodos(
            todos.map((todo) => {
                return todo.id === id ? { ...todo, todo: editTodo } : todo;
            })
        );
        setEdit(false);
    };

    return (
        <form
            className="todos__single"
            onSubmit={(eve) => handleEdit(eve, todo.id)}>
            {edit ? (
                <input
                    value={editTodo}
                    onChange={(eve) => setEditTodo(eve.target.value)}
                    className="todos__single--text"
                />
            ) : todo.isDone ? (
                <s className="todos__single--text">{todo.todo}</s>
            ) : (
                <span className="todos__single--text">{todo.todo}</span>
            )}
            <div>
                <span
                    className="icon"
                    onClick={() => {
                        if (!edit && !todo.isDone) {
                            setEdit(!edit);
                        }
                    }}>
                    <FiEdit3 />
                </span>
                <span className="icon" onClick={() => handleDelete(todo.id)}>
                    <TiDelete />
                </span>
                <span className="icon" onClick={() => handleDone(todo.id)}>
                    <MdOutlineDownloadDone />
                </span>
            </div>
        </form>
    );
};

export default SingleTodo;

import React from "react";
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
    return (
        <form className="todos__single">
            <span className="todos__single--text">{todo.todo}</span>
            <div>
                <span className="icon">
                    <FiEdit3 />
                </span>
                <span className="icon">
                    <TiDelete />
                </span>
                <span className="icon">
                    <MdOutlineDownloadDone />
                </span>
            </div>
        </form>
    );
};

export default SingleTodo;

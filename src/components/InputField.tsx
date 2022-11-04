import React, { useRef } from "react";
import "./style.css";

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (eve: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form
            className="input"
            onSubmit={(e) => {
                handleAdd(e);
                inputRef.current?.blur();
            }}>
            <input
                ref={inputRef}
                type="input"
                placeholder="Add task"
                className="input__box"
                value={todo}
                onChange={(eve: React.ChangeEvent<HTMLInputElement>) => {
                    setTodo(eve.target.value);
                }}
            />
            <button type="submit" className="input_submit">
                Add
            </button>
        </form>
    );
};

export default InputField;

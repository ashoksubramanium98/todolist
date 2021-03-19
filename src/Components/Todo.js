import React, {useContext} from "react";
import {TodoListContainer, TodoData, TodoName, DeleteIcon} from './styles';
import {TodoContext} from "./TodoContextProvider";
import DB from "../lib/db";

const Todo = () => {
    const {todoList, setTodoList} = useContext(TodoContext);

    const removeTodo = async (todoID) => {
        const db = await DB.openDB("TodoDatabase", 1);
        const todoStore = await DB.transaction(
            db,
            ["todo"],
            "readwrite"
        ).getStore("todo");

        const [deleted, remaining] = await DB.deleteObjectData(
            todoStore,
            todoID
        );
        setTimeout(() => setTodoList(remaining), 300);
    };

    return (todoList.length === 0) ? <p style={{textAlign: 'center'}}>Add your first todo</p> : 
        <TodoListContainer>
            {todoList.map(({todoID, name}, index) => (
                <TodoData key={todoID}>
                    <TodoName>{index + 1}. {name}</TodoName>
                    <DeleteIcon onClick={() => removeTodo(todoID)} />
                </TodoData>
            ))}
        </TodoListContainer>
};

export default Todo;
import React, {useContext} from "react";
import Axios from 'axios';
import AddTodo from './AddTodo';
import {Container, Header, TodoListContainer, TodoData, TodoName, DeleteIcon} from './styles';
import {TodoContext} from "./TodoContextProvider";
import DB from "../lib/db";

const Todo = () => {
    const {todoList, setTodoList} = useContext(TodoContext);

    const removeTodo = async (id, todoID) => {
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

        let onLine = window.navigator.onLine;
        onLine && await Axios.delete(`https://6054ca5bd4d9dc001726e058.mockapi.io/todo/${id}`);
        setTimeout(() => setTodoList(remaining), 300);
    };

    return (
        <Container>
            <Header>Todo List</Header>
            <AddTodo />
            {(todoList.length === 0) ? <p style={{textAlign: 'center', color: '#333'}}>Add your first todo</p> : 
            <TodoListContainer>
                {todoList.map(({id, todoID, name}, index) => (
                    <TodoData key={todoID}>
                        <TodoName>{index + 1}. {name}</TodoName>
                        <DeleteIcon onClick={() => removeTodo(id, todoID)} />
                    </TodoData>
                ))}
            </TodoListContainer>}
        </Container>
    )
};

export default Todo;
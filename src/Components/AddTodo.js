import React, {useState, useContext} from "react";
import AddTodoModal from './ui/Modal';
import {Container, Header, AddIcon} from './styles';
import {TodoContext} from "./TodoContextProvider";
import UniqueString from "../lib/uniqueId";
import DB from "../lib/db";

const AddTodo = () => {
    const [TodoName, setTodoName]       = useState("");
    const [showAddPopup, setAddPopup]   = useState(false);
    const {todoList, setTodoList}       = useContext(TodoContext);

    const handleAddNewTodo = async (e) => {
        e.preventDefault();
        const db = await DB.openDB("TodoDatabase", 1);
        const todoStore = await DB.transaction(
            db,
            ["todo"],
            "readwrite"
        ).getStore("todo");

        const newTodo = await DB.addObjectData(todoStore, {
            todoID: new UniqueString().generate(),
            name: TodoName
        });

        setTodoList(newTodo);
        setAddPopup(!showAddPopup);
        setTodoName("");
    }

    return (
        <Container>
            <Header>Todo List</Header>
            <AddIcon onClick={() => setAddPopup(!showAddPopup)} />
            <AddTodoModal modalIsOpen={showAddPopup} closeModal={() => setAddPopup(!showAddPopup)} onChange={(value) => setTodoName(value)} todoText={TodoName} submitTodo={handleAddNewTodo} />
        </Container>
    );
};

export default AddTodo;
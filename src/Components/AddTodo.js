import React, {useState, useContext} from "react";
import Axios from 'axios';
import AddTodoModal from './ui/Modal';
import {AddIcon} from './styles';
import {TodoContext} from "./TodoContextProvider";
import UniqueString from "../lib/uniqueId";
import DB from "../lib/db";

const AddTodo = () => {
    const [TodoName, setTodoName]       = useState("");
    const [showAddPopup, setAddPopup]   = useState(false);
    const {todoList, setTodoList}       = useContext(TodoContext);

    const handleAddNewTodo = async () => {
        let payload = {
            todoID: new UniqueString().generate(),
            name: TodoName,
            createdAt: new Date().getTime()
        };
        let {data} = await Axios.post('https://6054ca5bd4d9dc001726e058.mockapi.io/todo', payload);

        if(data && data.id){
            const db = await DB.openDB("TodoDatabase", 1);
            const todoStore = await DB.transaction(
                db,
                ["todo"],
                "readwrite"
            ).getStore("todo");

            const newTodo = await DB.addObjectData(todoStore, {...data});
            setTodoList(newTodo);
            setAddPopup(!showAddPopup);
            setTodoName("");
        }
    }

    return (
        <>
            <AddIcon onClick={() => setAddPopup(!showAddPopup)} />
            <AddTodoModal modalIsOpen={showAddPopup} closeModal={() => setAddPopup(!showAddPopup)} onChange={(value) => setTodoName(value)} todoText={TodoName} submitTodo={handleAddNewTodo} />
        </>
    );
};

export default AddTodo;
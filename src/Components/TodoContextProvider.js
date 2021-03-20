import React, {useState} from "react";
import Axios from 'axios';
import DB from "../lib/db";
import suspender from "../lib/suspender";

async function setUpDatabase() {
    let onLine = window.navigator.onLine;
    let dataArr = [];
    if(onLine){
        let {data} = await Axios.get('https://6054ca5bd4d9dc001726e058.mockapi.io/todo');
        dataArr = (data.length !== 0) ? data : [];
    }
    return await DB.createDB("TodoDatabase", 1, [{
        name: "todo",
        config: {keyPath: "todoID"},
        data: dataArr
    }]);
}

const TodoContext = React.createContext();

async function getAllTodosFromDB() {
    await setUpDatabase();
    let db = await DB.openDB("TodoDatabase", 1);
    const menuStore = await DB.transaction(
        db,
        ["todo"],
        "readwrite"
    ).getStore("todo");

    let alltods = await DB.getAllObjectData(menuStore);
    return alltods;
}

const resource = suspender(getAllTodosFromDB());

const TodoContextProvider = ({children}) => {
    const todos = resource.data.read();
    const [todoList, setTodoList] = useState(todos);
    
    // let onLine = window.navigator.onLine;
    // if(onLine){
    //     let idNotAvailableArr = todoList.filter(({id}) => !id);
    //     console.log('idNotAvailableArr', idNotAvailableArr.length)
    //     if(idNotAvailableArr.length !== 0){
    //         idNotAvailableArr.forEach(async ({todoID, name, createdAt}) => {
    //             let payload = {
    //                 todoID: todoID,
    //                 name: name,
    //                 createdAt: createdAt
    //             };
    //             let {data} = await Axios.post('https://6054ca5bd4d9dc001726e058.mockapi.io/todo', payload);

    //             const db = await DB.openDB("TodoDatabase", 1);
    //             const todoStore = await DB.transaction(
    //                 db,
    //                 ["todo"],
    //                 "readwrite"
    //             ).getStore("todo");

    //             const newTodo = await DB.addObjectData(todoStore, {...data});
    //             setTodoList(newTodo);
    //         })
    //     }
    // }
    return (
        <TodoContext.Provider value={{todoList, setTodoList}}>
            {children}
        </TodoContext.Provider>
    );
}

export default TodoContextProvider;
export {TodoContext};
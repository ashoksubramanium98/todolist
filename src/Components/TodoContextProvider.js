import React, { useState } from "react";
import DB from "../lib/db";
import suspender from "../lib/suspender";

async function setUpDatabase() {
    return await DB.createDB("TodoDatabase", 1, [{
        name: "todo",
        config: {keyPath: "todoID"}
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
    return (
        <TodoContext.Provider value={{todoList, setTodoList}}>
            {children}
        </TodoContext.Provider>
    );
}

export default TodoContextProvider;
export {TodoContext};
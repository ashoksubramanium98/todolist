import {ADD_TODO, DELETE_TODO} from './actions';

export const addTodo = (_id, todo) => {return{
    type: ADD_TODO,
    _id,
    todo
}};

export const deleteTodo = (_id) => {return{
    type: DELETE_TODO,
    _id
}};
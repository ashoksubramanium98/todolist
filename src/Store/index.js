import {createStore} from 'redux';
import TodoList from '../Reducer';

let store = createStore(TodoList);

export default store;

import {ADD_TODO, DELETE_TODO} from '../Actions/actions';

const TodoList = (state = [], action) => {

    state = {
        todoArr: []
    };

    switch(action.type){
        case ADD_TODO:
            return {
                todoArr: action.todoArr,
                ...state
            }

        case DELETE_TODO:
            return{
                todoArr: action.todoArr,
                ...state
            }

        default: 
            return state
    }
};

export default TodoList;
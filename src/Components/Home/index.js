import React, {Component} from 'react';
import randomInt from 'random-int';
import AddTodoModal from '../ui/Modal';
import {Container, Header, AddIcon, TodoListContainer, TodoData, TodoName, DeleteIcon} from './styles';

class Home extends Component{

    state = {
        arr: (this.props.todoArr && this.props.todoArr.length !== 0) ? this.props.todoArr : [],
        showAddPopup: false,
        todoText: ''
    };

    componentDidMount() {
        const {todoArr} = this.props;
        this.setState({
            arr: (todoArr && todoArr.length !== 0) ? todoArr : [],
            showAddPopup: false,
            todoText: ''
        });
    }

    componentDidUpdate(prevProps, prevState){
        const {arr} = this.state;
        console.log('arr', arr)
        if(arr.length !== prevState.arr.length){
            this.setState({
                showAddPopup: false,
                todoText: ''
            });
        }
    }

    handleAddTodo = () => {
        this.setState({
            showAddPopup: !this.state.showAddPopup
        });
    }

    handleTodoData = (todo) => {
        this.setState({
            todoText: todo
        });
    }

    submitTodo = () => {
        this.setState({
            showAddPopup: !this.state.showAddPopup,
            arr: [...this.state.arr, {_id: randomInt(0, 1000), todo: this.state.todoText}]
        });
    }

    handleDeleteTodo = (id) => {
        this.setState({
            arr: this.state.arr.filter(({_id}) => _id !== id)
        })    
    }

    render(){
        const {arr, showAddPopup, todoText} = this.state;
        return(
            <Container>
                <Header>Todo List</Header>
                <TodoListContainer>
                    {(arr.length === 0) ? <p style={{textAlign: 'center'}}>Add your first todo</p> : 
                        arr.map( ({_id, todo}, index) => (
                            <TodoData key={_id}>
                                <TodoName>{index + 1}. {todo}</TodoName>
                                <DeleteIcon onClick={() => this.handleDeleteTodo(_id)} />
                            </TodoData>
                        ))
                    }
                </TodoListContainer>
                <AddIcon onClick={this.handleAddTodo} />
                <AddTodoModal modalIsOpen={showAddPopup} closeModal={this.handleAddTodo} onChange={this.handleTodoData} todoText={todoText} submitTodo={this.submitTodo} />
            </Container>
        );
    };
};

export default Home;
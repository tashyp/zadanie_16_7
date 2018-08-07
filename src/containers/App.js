import React from 'react';
import uuid from 'uuid';
import style from './css/App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    text: 'Go to work'
                },
                {
                    id: 2,
                    text: 'Learn JavaScript'
                },
                {
                    id: 3,
                    text: 'Do some exercises'
                }
            ]
        };
    }
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }
    render() {
        return (
            <div className={style.TodoApp}>
                <Title title='Hot Module Replecement' number={this.state.data.length} />  
                <TodoForm add={this.addTodo.bind(this)} />
                <TodoList data={this.state.data} remove={this.removeTodo.bind(this)} />               
            </div> 
        );
    }
}

export default App;

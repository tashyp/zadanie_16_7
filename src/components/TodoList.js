import React from 'react';
import style from './css/TodoList.css';
import Todo from '../components/Todo';

const TodoList = props => (
	<ul>
		{props.data.map((todo, index) => <Todo key={index} todo={todo} remove={props.remove} />)}
	</ul>
);

export default TodoList;

import React from 'react';

const TodoForm = props => (
	<form onSubmit={(e) => {
		e.preventDefault();
		const inputEl = e.target.querySelector('input');
		props.add(inputEl.value);
		inputEl.value = '';
	}}>
		<input />
		<button>Add</button>
	</form>
);

export default TodoForm;
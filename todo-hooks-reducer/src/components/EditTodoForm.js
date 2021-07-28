import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from '../hooks/useInputState';
import { TodosContext } from '../context/todos.context';

function EditTodoForm({ task, id, toggleUpdate }) {
	const { dispatch } = useContext(TodosContext);
	const [value, handleChange, reset] = useInputState(task);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({ type: 'EDIT', id: id, newTask: value });
		reset();
		toggleUpdate(false);
	};

	return (
		<form onSubmit={handleSubmit} style={{ marginLeft: '1rem', width: '100%' }}>
			<TextField
				value={value}
				onChange={handleChange}
				margin='normal'
				fullWidth
				autoFocus
			/>
		</form>
	);
}

export default EditTodoForm;

import React, { useContext } from 'react';
import useToggleState from '../hooks/useToggleState';
import EditTodoForm from './EditTodoForm';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { TodosContext } from '../context/todos.context';

function Todo({ task, completed, id }) {
	const { deleteTodo, toggleTodo } = useContext(TodosContext);
	const [isEditing, toggle] = useToggleState(false);
	const handleDelete = () => {
		deleteTodo(id);
	};
	const handleToggle = () => {
		toggleTodo(id);
	};
	return (
		<ListItem style={{ height: '64px' }}>
			{isEditing ? (
				<EditTodoForm task={task} id={id} toggleUpdate={toggle} />
			) : (
				<>
					<Checkbox checked={completed} tabIndex={-1} onClick={handleToggle} />
					<ListItemText
						style={{ textDecoration: completed ? 'line-through' : 'none' }}>
						{task}
					</ListItemText>
					<ListItemSecondaryAction>
						<IconButton aria-label='Delete' onClick={handleDelete}>
							<DeleteIcon></DeleteIcon>
						</IconButton>
						<IconButton aria-label='Edit' onClick={toggle}>
							<EditIcon></EditIcon>
						</IconButton>
					</ListItemSecondaryAction>
				</>
			)}
		</ListItem>
	);
}

export default Todo;

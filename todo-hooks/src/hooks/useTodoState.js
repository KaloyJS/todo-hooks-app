import useLocalStorageState from './useLocalStorageState';
import { v4 as uuidv4 } from 'uuid';
export default (initialTodos) => {
	const [todos, setTodos] = useLocalStorageState('todos', initialTodos);
	return {
		todos,
		addTodo: (newTodoText) => {
			setTodos([
				...todos,
				{ id: uuidv4(), task: newTodoText, completed: false },
			]);
		},
		deleteTodo: (id) => {
			// filter out removed todo
			const updatedTodos = todos.filter((todo) => todo.id !== id);
			// call setTodos with new todos array
			setTodos(updatedTodos);
		},
		toggleTodo: (id) => {
			const updatedTodos = todos.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			);
			setTodos(updatedTodos);
		},
		updateTodo: (id, updatedTask) => {
			const updatedTodos = todos.map((todo) =>
				todo.id === id ? { ...todo, task: updatedTask } : todo
			);
			setTodos(updatedTodos);
		},
	};
};

import React, { createContext } from 'react';
import useTodoState from '../hooks/useTodoState';

export const TodosContext = createContext();

export function TodosProvider(props) {
	const todoStuff = useTodoState();
	return (
		<TodosContext.Provider value={todoStuff}>
			{props.children}
		</TodosContext.Provider>
	);
}

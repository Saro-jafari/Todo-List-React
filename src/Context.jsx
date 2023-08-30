import { createContext, useEffect, useState } from 'react';

export const TodoContext = createContext();
const Context = ({ children }) => {
	const [todos, setTodos] = useState([]);
	const [isCompleted, setIsCompleted] = useState([]);
	const [newTodoText, setNewTodoText] = useState('');
	const newTodo = {
		id: Math.floor(Math.random() * 1000),
		text: newTodoText,
		isCompleted: false,
	};
	useEffect(() => {
		const TodosLocal = JSON.parse(localStorage.getItem('todos'));
		if (TodosLocal) {
			setTodos(TodosLocal);
		}
	}, []);

	const changeHandler = e => {
		setNewTodoText(e.target.value);
	};

	const addTodo = () => {
		setTodos([...todos, newTodo]);
		setNewTodoText('');
		localStorage.setItem('todos', JSON.stringify([...todos, newTodo]));
	};

	const removeHandler = id => {
		const remove = todos.filter(todo => todo.id !== id);
		localStorage.removeItem('todos', JSON.stringify(todos.filter(todo => todo.id !== id)));
		setTodos(remove);
	};
	const filterTodos = id => {
		const todoFind = todos.find(todo => todo.id === id);
		setIsCompleted([...todos], (todoFind.isCompleted = !todoFind.isCompleted));
		setTodos([...todos], newTodo);
		localStorage.setItem('todos', JSON.stringify(todos));
	};

	return (
		<TodoContext.Provider value={{ todos, setTodos, newTodoText, changeHandler, addTodo, removeHandler, filterTodos }}>
			{children}
		</TodoContext.Provider>
	);
};

export default Context;

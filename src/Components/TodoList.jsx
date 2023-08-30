import React, { useContext } from 'react';
import { SlCheck, SlClose } from 'react-icons/sl';
import { TodoContext } from '../Context';
const TodoList = () => {
	const { todos, removeHandler, filterTodos } = useContext(TodoContext);

	return (
		<>
			{todos.map(todo => {
				return (
					<div
						key={todo.id}
						className={`flex justify-between items-center gap-5 cursor-pointer  p-3  ${
							todo.isCompleted ? 'bg-slate-300' : 'bg-slate-900'
						}`}>
						<p key={todo.id} className={`${todo.isCompleted ? 'line-through' : ''}`}>
							{todo.text}
						</p>
						<div className="flex gap-3 ">
							<SlCheck className={`text-2xl hover:text-green-500 `} onClick={() => filterTodos(todo.id)} />
							<SlClose className="text-2xl hover:text-rose-400 " onClick={() => removeHandler(todo.id)} />
						</div>
					</div>
				);
			})}
		</>
	);
};

export default TodoList;

import React, {FC, useState} from 'react';
import {FilterTypes, TodoTypes} from '../../types/todoTypes';
import {TodoList} from "./TodoList";
import {Filter} from "./Filter";
import {AddTodo} from "./AddTodo";

import classes from './Todo.module.scss';

interface TodoProps {
	data: TodoTypes[];
}

export const Todo: FC<TodoProps> = ({data}) => {

	const [todos, setTodos] = useState<TodoTypes[]>(data);
	const [filter, setFilter] = useState<FilterTypes>('All');

	const handleToggle = (id: number) => {
		setTodos(prevTodos =>
			prevTodos.map(todo =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		);
	};

	const handleAddTodo = (text: string) => {
		const newTodo: TodoTypes = {
			id: todos.length + 1,
			text,
			completed: false,
		};
		setTodos([...todos, newTodo]);
	};

	const handleFilterChange = (newFilter: FilterTypes) => {
		setFilter(newFilter);
	};

	const filteredTodos = todos.filter(todo => {
		if (filter === 'Active') return !todo.completed;
		if (filter === 'Completed') return todo.completed;
		return true;
	});

	const handleClearCompleted = () => setTodos(todos.filter(todo => !todo.completed))

	return (
		<div className={classes.container}>
			<AddTodo onAddTodo={handleAddTodo} />

			<TodoList todos={filteredTodos} onToggle={handleToggle}/>

			<div className={classes.footer}>
				<span>{filteredTodos.filter(todo => !todo.completed).length} items left</span>
				<Filter currentFilter={filter} onFilterChange={handleFilterChange}/>
				<div
					onClick={handleClearCompleted}
					className={classes.clearCompleted}
				>
					Clear Completed
				</div>
			</div>
		</div>
	);
};

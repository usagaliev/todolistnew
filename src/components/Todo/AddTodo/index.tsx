import React, { useState } from 'react';
import classes from './AddTodo.module.scss';
import {Input} from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {styled} from "@mui/material/styles";

interface AddTodoProps {
	onAddTodo: (text: string) => void;
}

export const AddTodo: React.FC<AddTodoProps> = ({ onAddTodo }) => {
	const [todoText, setTodoText] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (todoText.trim()) {
			onAddTodo(todoText);
			setTodoText('')
		}
	};

	const AddIcon = styled(AddCircleOutlineIcon)({
		width: 30,
		height: 30,
		fontSize: 28,
		color: 'rgba(77,77,77,0.5)',
	})

	return (
		<form onSubmit={handleSubmit} className={classes.form}>
			<AddIcon className={classes.icon} />
			<Input
				type="text"
				className={classes.input}
				value={todoText}
				onChange={(e) => setTodoText(e.target.value)}
				placeholder="What needs to be done?"
			/>
			<button className={classes.button} type="submit">Add</button>
		</form>
	);
};
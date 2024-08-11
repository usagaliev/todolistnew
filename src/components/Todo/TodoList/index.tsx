import React from 'react';
import {TodoListProps} from "../../../types/todoTypes";
import {TodoListItem} from "./TodoListItem";
import {List} from "@mui/material";
import {styled} from "@mui/material/styles";

export const TodoList: React.FC<TodoListProps> = ({ todos, onToggle }) => {
	const CustomList = styled(List)({
		width: '100%',
		height: 400,
		overflow: 'auto',
	});
	return (
		<CustomList>
			{todos.map(todo => (
				<TodoListItem
					key={todo.id}
					todo={todo.text}
					completed={todo.completed}
					onToggle={() => onToggle(todo.id)}
				/>
			))}
		</CustomList>
	);
};
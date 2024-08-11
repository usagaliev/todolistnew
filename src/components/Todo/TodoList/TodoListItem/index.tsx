import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';
import {TodoProps} from "../../../../types/todoTypes";
import classes from '../TodoList.module.scss';
import {ListItem} from "@mui/material";
import CircleChecked from '@mui/icons-material/CheckCircleOutline';
import CircleUnchecked from '@mui/icons-material/RadioButtonUnchecked';
import clsx from "clsx";

export const TodoListItem: React.FC<TodoProps> = ({ todo, completed, onToggle }) => {
	const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
		'& .MuiSvgIcon-root': {
			width: 30,
			height: 30,
			fontSize: 28
		},
		'&.Mui-checked': {
			color: theme.palette.primary.main,
		},
	}));
	return (
		<ListItem sx={{paddingLeft: 0, borderBottom: '1px solid #ccc'}}>
			<FormControlLabel
				className={classes.todoList__item__checkbox}
				control={
					<CustomCheckbox
						checkedIcon={<CircleChecked />}
						icon={<CircleUnchecked />}
						checked={completed}
						tabIndex={-1}
						disableRipple
						onChange={onToggle}
					/>
				}
				label=''
			/>
			<span
				className={clsx(
					classes.todoList__item__text,
					completed && classes.todoList__item__text_completed
				)}
				style={{textDecoration: completed ? 'line-through' : 'none'}}>
					{todo}
				</span>
		</ListItem>
	);
};

import React from 'react';
import classes from './Filter.module.scss';
import clsx from 'clsx';
import {FILTERS} from "../constants";

type Filter = 'All' | 'Active' | 'Completed';

interface TodoFilterProps {
	currentFilter: Filter;
	onFilterChange: (filter: Filter) => void;
}

export const Filter: React.FC<TodoFilterProps> = ({ currentFilter, onFilterChange }) => {
	return (
		<div className={classes.filter}>
			<span
				onClick={() => onFilterChange('All')}
				className={clsx(classes.button, currentFilter === FILTERS.ALL && classes.active)}
			>
				All
			</span>
			<span
				onClick={() => onFilterChange('Active')}
				className={(clsx(classes.button, currentFilter === FILTERS.ACTIVE && classes.active))}
			>
				Active
			</span>
			<span
				onClick={() => onFilterChange('Completed')}
				className={clsx(classes.button, currentFilter === FILTERS.COMPLETED && classes.active)}
			>
				Completed
			</span>
		</div>
	);
};
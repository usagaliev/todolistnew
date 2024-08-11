export interface TodoProps {
	todo: string;
	completed: boolean;
	onToggle: () => void;
}

export interface TodoTypes {
	id: number;
	text: string;
	completed: boolean;
}

export interface TodoListProps {
	todos: TodoTypes[];
	onToggle: (id: number) => void;
}

export type FilterTypes = 'All' | 'Active' | 'Completed';

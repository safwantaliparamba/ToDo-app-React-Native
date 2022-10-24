import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TodoItem from './TodoItem';

const Todo = ({ todo, addToCompletedTodoHandler, deleteTodoHandler }) => {
	return (
		<View>
			<Text style={styles.header}>Tasks</Text>
			{todo.map((task) => (

				<TodoItem
					key={task.id}
					task={task}
					addToCompletedTodoHandler={addToCompletedTodoHandler}
					deleteTodoHandler={deleteTodoHandler}
				/>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		fontSize: 18,
		marginBottom: 16,
		fontWeight: '500',
		color: '#111',
	},
	todoItem: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	circle: {
		width: 25,
		height: 25,
		borderRadius: 25 / 2,
		borderWidth: 2,
		borderColor: '#111',
	},
	itemText: {
		marginLeft: 10,
		color: '#111',
		fontSize: 16,
	},
	deleteIcon: {
		width: 25,
		height: 25,
	},
});

export default Todo;

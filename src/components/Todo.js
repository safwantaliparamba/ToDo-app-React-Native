import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const TodoItem = ({ task, id, addToCompletedTodoHandler, deleteTodoHandler }) => {
	return (
		<View style={[styles.todoItem, { justifyContent: 'space-between', paddingVertical: 6, }]}>
			<TouchableOpacity
				style={styles.todoItem}
				onPress={() => {
					addToCompletedTodoHandler(id)
					console.warn(`adding todo completed todo list with id ${id}`);
				}}>
				<View style={styles.circle}></View>
				<Text style={styles.itemText}>{task}</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => {
				console.warn(`deleting a todo with id ${id}`);
				deleteTodoHandler(id)
			}}>
				<Image style={styles.deleteIcon} source={require('../assets/icons/delete.png')} />
			</TouchableOpacity>
		</View>
	)
}

const Todo = ({ todo, addToCompletedTodoHandler, deleteTodoHandler }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.header}>Tasks</Text>
			{todo.map((task) => (

				<TodoItem
					key={task.id}
					id={task.id}
					task={task.task}
					addToCompletedTodoHandler={addToCompletedTodoHandler}
					deleteTodoHandler={deleteTodoHandler}
				/>
			))}
			{/* <TodoItem />
			<TodoItem />
			<TodoItem /> */}
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
	container: {
		// backgroundColor: '#339977',
		// paddingHorizontal: 20,
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

import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Todo from './src/components/Todo';
import CompletedTodo from './src/components/CompletedTodo';


export default function App() {
	const [todo, setTodo] = useState([
		{
			id: 0, task: 'buy groceries', isCompleted: false
		},
		{
			id: 1, task: 'clean house', isCompleted: false
		},
		{
			id: 2, task: 'do some projects', isCompleted: true
		}
	])
	const [todoInput, setTodoInput] = useState('')
	const [idCount, setIdCount] = useState(3)


	// methodsto handle todo

	function addToTodoHandler() {
		if (todoInput) {
			setTodo([...todo, {
				id: idCount,
				task: todoInput,
				isCompleted: false,
			}]);
			setTodoInput('');
			setIdCount(prev => prev + 1);
			console.log('todo', todo);
		}
	}

	const deleteTodoHandler = (task) => {
		const filteredTodo = todo.filter(todo => todo.id !== task.id)
		setTodo(filteredTodo)
	}
	const addToCompletedTodoHandler = (task) => {
		const filteredTodo = todo.filter(item => item.id !== task.id)
		task.isCompleted = true;
		setTodo([...filteredTodo, task])
	}

	const revertTodoHandler = (task) => {
		const filteredTodo = todo.filter(item => item.id !== task.id)
		task.isCompleted = false;
		setTodo([...filteredTodo, task])
	}



	return (
		<ScrollView style={styles.mainContainer}>
			<View style={styles.mainHeaderWrapper}>
				<Text style={styles.mainHeader}>ToDo App</Text>
			</View>
			{/* todo list  */}
			<Todo
				todo={todo.filter(item => !item.isCompleted)}
				addToCompletedTodoHandler={addToCompletedTodoHandler}
				deleteTodoHandler={deleteTodoHandler}
			/>
			{/* input field  */}
			<View style={styles.newTodoConatiner}>
				<View style={styles.newTodoLeft}>
					<Text>+</Text>
					<TextInput
						value={todoInput}
						style={styles.newInput}
						placeholder="Enter your new todo..."
						onChangeText={(text) => {
							setTodoInput(text)
						}} />
				</View>
				<TouchableOpacity
					style={styles.newTodoRight}
					onPress={addToTodoHandler}>
					<Text style={styles.addButton}>Add</Text>
				</TouchableOpacity>
			</View>
			{/* completed todos  */}
			<CompletedTodo
				completedTodo={todo.filter(item => item.isCompleted)}
				revertTodoHandler={revertTodoHandler}
				deleteTodoHandler={deleteTodoHandler}
			/>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		paddingHorizontal: 20,
	},
	mainHeaderWrapper: {
		paddingVertical: 20,
	},
	mainHeader: {
		fontSize: 22,
		fontWeight: '600',
		color: '#111',
		textAlign: 'center',
	},
	newTodoConatiner: {
		// flex:1,
		marginVertical: 22,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	newTodoLeft: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 10,
		borderWidth: 1,
		borderColor: '#999',
		borderTopLeftRadius: 6,
		borderBottomLeftRadius: 6,
	},
	newInput: {
		marginLeft: 10,
		fontSize: 16,
		color: '#999',
	},
	newTodoRight: {
		flexDirection: 'row',
		height: '100%',
		width: 80,
		backgroundColor: '#0044ff',
		borderTopRightRadius: 6,
		borderBottomRightRadius: 6,
		justifyContent: 'center',
		alignItems: 'center',
	},
	addButton: {
		// textAlign:'center',
		color: '#fff',
		fontWeight: '600',
		fontSize: 17,
	},
});

import { View, Text, ScrollView, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Todo from './src/components/Todo';
import CompletedTodo from './src/components/CompletedTodo';


export default function App() {
	const [todo, setTodo] = useState([{
		id: 0, task: 'buy groceries'
	}])
	const [completedTodo, setCompletedTodo] = useState([{
		id: 1, task: 'buy some eggs'
	}])
	const [todoInput, setTodoInput] = useState('')
	const [idCount, setIdCount] = useState(2)

	const addToTodoHandler = () => {
		setTodo([...todo, {
			id: idCount,
			task: todoInput
		}])
		setTodoInput('')
		setIdCount(prev => prev + 1)
		console.log('completedTodo', completedTodo);
		console.log('todo', todo);
	}

	const addToCompletedTodoHandler = (id) => {
		const newCompletedTodo = todo.filter(item => item.id === id)[0]
		const filteredTodo = todo.filter(item => item.id !== id)
		setCompletedTodo([...completedTodo, newCompletedTodo])
		setTodo(filteredTodo)
		console.log('todo', todo);
	}

	const revertTodoHandler = (id) => {
		const uncompletedTodo = completedTodo.filter(item => item.id === id)[0]
		const filteredCompletedTodo = completedTodo.filter(item => item.id !== id)
		setTodo([...todo, uncompletedTodo])
		setCompletedTodo(filteredCompletedTodo)
	}

	const deleteTodoHandler = (id) => {
		const filteredTodo = todo.filter(todo => todo.id !== id)
		setTodo(filteredTodo)
	}

	const deleteCompletedTodoHandler = (id) => {
		const filteredCompletedTodo = completedTodo.filter(todo => todo.id !== id)
		setCompletedTodo(filteredCompletedTodo)
	}


	return (
		<SafeAreaView style={styles.mainContainer}>
			<View style={styles.mainHeaderWrapper}>
				<Text style={styles.mainHeader}>ToDo App</Text>
			</View>
			{/* todo list  */}
			<Todo
				todo={todo}
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
				completedTodo={completedTodo}
				revertTodoHandler={revertTodoHandler}
				deleteCompletedTodoHandler={deleteCompletedTodoHandler}
			/>
		</SafeAreaView>
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

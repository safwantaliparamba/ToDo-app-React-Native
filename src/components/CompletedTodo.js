import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import TodoItem from './TodoItem'

export default function CompletedTodo({ completedTodo, deleteTodoHandler, revertTodoHandler }) {
    return (
        <View >
            <Text style={styles.header}>Completed Tasks</Text>
            {completedTodo.map((task) => (
                <TodoItem
                    key={task.id}
                    task={task}
                    revertTodoHandler={revertTodoHandler}
                    deleteTodoHandler={deleteTodoHandler}
                />
            ))}
        </View>
    )
}


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
        marginLeft: 15,
    },
    actions: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});
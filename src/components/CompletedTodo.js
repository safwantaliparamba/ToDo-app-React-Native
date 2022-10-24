import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CompletedTodoItem = ({ id, task, deleteCompletedTodoHandler, revertTodoHandler }) => {
    return (
        <View style={[styles.todoItem, { justifyContent: 'space-between', paddingVertical: 6, }]}>
            <View style={styles.todoItem} >
                <Image source={require('../assets/icons/checked.png')} style={[styles.deleteIcon, { marginLeft: 0, }]} />
                <Text style={styles.itemText}>{task}</Text>
            </View>
            <View style={styles.actions}>
                <TouchableOpacity onPress={() => {
                    console.warn(`reverting completed todo with id ${id}`);
                    revertTodoHandler(id)
                }}>
                    <Image style={styles.deleteIcon} source={require('../assets/icons/revert.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    console.warn(`deleting completed todo with id ${id}`);
                    deleteCompletedTodoHandler(id)
                }}>
                    <Image style={styles.deleteIcon} source={require('../assets/icons/delete.png')} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default function CompletedTodo({ completedTodo, deleteCompletedTodoHandler, revertTodoHandler }) {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Completed Tasks</Text>
            {completedTodo.map((task) => (
                <CompletedTodoItem
                    key={task.id}
                    task={task.task}
                    id={task.id}
                    revertTodoHandler={revertTodoHandler}
                    deleteCompletedTodoHandler={deleteCompletedTodoHandler}
                />
            ))}
            {/* <CompletedTodoItem />
            <CompletedTodoItem />
            <CompletedTodoItem /> */}
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
        marginLeft: 15,
    },
    actions: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});
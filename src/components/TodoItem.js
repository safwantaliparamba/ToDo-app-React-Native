import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function TodoItem({ task, deleteTodoHandler, revertTodoHandler, addToCompletedTodoHandler }) {
    return (
        <View
            style={[styles.todoItem, {
                justifyContent: 'space-between', paddingVertical: 6,
            }]}
        >
            {task.isCompleted ? (
                <View style={styles.todoItem} >
                    <Image
                        source={require('../assets/icons/checked.png')}
                        style={[styles.deleteIcon, { marginLeft: 0, }]}
                    />
                    <Text style={styles.itemText}>{task.task}</Text>
                </View>
            ) : (
                <TouchableOpacity
                    style={styles.todoItem}
                    onPress={() => {
                        addToCompletedTodoHandler(task)
                    }}>
                    <View style={styles.circle}></View>
                    <Text style={styles.itemText}>{task.task}</Text>
                </TouchableOpacity>
            )
            }

            <View style={styles.actions}>
                {task.isCompleted && (
                    <TouchableOpacity onPress={() => {
                        revertTodoHandler(task)
                    }}>
                        <Image
                            style={styles.deleteIcon}
                            source={require('../assets/icons/revert.png')}
                        />
                    </TouchableOpacity>
                )
                }
                <TouchableOpacity onPress={() => {
                    deleteTodoHandler(task)
                }}>
                    <Image
                        style={styles.deleteIcon}
                        source={require('../assets/icons/delete.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

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
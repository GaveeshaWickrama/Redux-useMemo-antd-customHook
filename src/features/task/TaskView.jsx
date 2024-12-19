 import React, { useMemo } from "react";
 import { useSelector, useDispatch } from "react-redux";
 import { List, Checkbox, Button } from 'antd'
 import { changeStatus, deleteTask } from './taskSlice'

 export const TaskView = () => {

    const tasks = useSelector( (state) => state.tasks)
    const dispatch = useDispatch()//returns a reference to the dispatch function of the redux store
    const completedTasks = useMemo(() => tasks.filter((task) => task.completed), [tasks])
    
    return (
        <>
        <h3>Completed Tasks: {completedTasks.length}</h3>
        <List
            dataSource={tasks}
            renderItem={(task) => (
                <List.Item
                    actions={[
                        <Button type="text" danger onClick={() => dispatch(deleteTask(task.id))}>
                        Delete
                        </Button>,
                    ]}
                >
                    <Checkbox
                        checked={task.completed}
                        onChange={() => dispatch(changeStatus(task.id))}
                    >
                        {task.description}
                    </Checkbox>
                </List.Item>
            )}
        />
    </>
    )
}
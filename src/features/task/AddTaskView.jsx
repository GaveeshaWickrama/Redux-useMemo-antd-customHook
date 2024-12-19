import React from "react";
import { Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { addTask } from "./taskSlice";
import useInput from "../../hooks/useInput";

export const AddTask = () => {

    const [task, bindTask, resetTask] = useInput('')
    const dispatch = useDispatch()

    const handleAddTask = () => {
        if (task.trim()) {
            dispatch(addTask(task));
            resetTask();
        }
    }

    return (
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
            <Input {...bindTask} placeholder="Add a new task" />
            <Button type="primary" onClick={handleAddTask}>
                Add Task
            </Button>
        </div>
    )
}
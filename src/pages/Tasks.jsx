import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CheckCircle, Trash2 } from 'lucide-react';
import { markTaskAsCompleted, removeAllTasks, removeFromTasks } from '../features/TaskSlice';

const Task = () => {
    const [completedIds, setCompletedIds] = useState([]);
    const tasks = useSelector((state) => state.task);
    const dispatch = useDispatch();

    const deleteAllTasks = () => {
        dispatch(removeAllTasks());
        setCompletedIds([]);
    };

    const handleDeleteTask = (id) => {
        dispatch(removeFromTasks(id));
        setCompletedIds(completedIds.filter((completedId) => completedId !== id));
    };

    const handleCompleteTask = (id) => {
        dispatch(markTaskAsCompleted(id));
        setCompletedIds([...completedIds, id]);
    };

    if (tasks.length < 1) {
        return (
            <div className='w-[100%] h-[80vh] flex justify-center items-center'>
                <p className='text-3xl font-bold text-center'>No Tasks found</p>
            </div>
        );
    }

    return (
        <>
            <div className='py-8 flex flex-col justify-center items-center mt-20 md:mt-5 mx-4 md:mx-10'>
                {tasks.map((task) => {
                    const { id, title, description } = task;
                    const isCompleted = completedIds.includes(id);
                    return (
                        <div className="w-[450px] md:w-[600px] items-center my-2" key={id}>
                            <div className={`p-4 flex justify-between items-center rounded-b-md shadow-2xl ${isCompleted ? 'line-through' : ''}`}>
                                <div className='flex gap-4'>
                                    <input type="checkbox"
                                        onChange={() => handleCompleteTask(id)}
                                        checked={isCompleted}
                                    />
                                    <div>
                                        <h1 className={`text-lg font-semibold ${isCompleted ? 'line-through' : ''}`}>
                                            Title : {title}
                                        </h1>
                                        <p className="text-sm text-gray-800">Desc : {description}</p>
                                    </div>
                                </div>
                                <div>
                                    {isCompleted ? (
                                        <CheckCircle />
                                    ) : (
                                        <button onClick={() => handleDeleteTask(id)}>
                                            <Trash2 />
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className='flex justify-center p-3'>
                <button className='flex border justify-center gap-4 bg-black text-white  rounded-2xl px-4 py-3'
                    onClick={deleteAllTasks} >
                    <span className='text-gray-200'>Delete All Tasks</span>
                    <span className='text-white'><Trash2 /></span>
                </button>
            </div>
        </>
    );
};

export default Task;

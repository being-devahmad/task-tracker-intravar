import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { addToTasks } from '../features/TaskSlice';


const Home = () => {
    const dispatch = useDispatch();

    const [tasksData, setTasksData] = useState({
        title: '',
        description: '',
    });

    const handleAddTask = (e) => {
        e.preventDefault();
        const newTask = { ...tasksData, id: new Date().getTime().toString() };
        dispatch(addToTasks(newTask));
        setTasksData({
            title: '',
            description: '',
        });
        alert("Task has been added")
    };

    const handleInput = (e) => {
        const { name, value } = e.target;
        setTasksData({ ...tasksData, [name]: value });
    };

    const { title, description } = tasksData

    return (
        <section>
            <div className="grid grid-cols-1">
                <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24 shadow-2xl rounded-2xl mt-20 md:mt-18 lg:mt-10"
                >
                    <div className="w-full md:max-w-md">
                        <h2 className="text-3xl font-bold font-serif leading-tight text-center text-black sm:text-4xl">TASK TRACKER BY INTRAVAR</h2>

                        <form action="#" method="POST" className="mt-8"
                            onSubmit={handleAddTask}
                        >
                            <div className="space-y-5">
                                <div>
                                    <label htmlFor="title" className="font-medium text-black">
                                        Enter Title
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border text-black border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-black focus:outline-none"
                                            type="text"
                                            name='title'
                                            placeholder="Enter title ..."
                                            value={title}
                                            onChange={handleInput}
                                        ></input>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="description" className="text-base font-medium text-black">
                                        Enter Description
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            cols="30" rows="10"
                                            className="flex h-10 w-full rounded-md border text-black border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-black focus:outline-none"
                                            placeholder="Enter description ..."
                                            name="description"
                                            value={description}
                                            onChange={handleInput}
                                        ></textarea>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="inline-flex w-full items-center justify-center rounded-md bg-black  px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                                    >
                                        Add to Tasks <ArrowRight className="ml-2" size={16} />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Home
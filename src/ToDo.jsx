import { useState } from 'react'
import CompletedTask from "./components/CompletedTask"

export default function ToDo() {
    // Defines a useState variable to store and setState function to store a new task
    const [newTask, setNewTask] = useState("");
    // hasError: boolean variable that is used to check if the user submitted a non-blank task
    const [hasError, setHasError] = useState(false);
    // taskList: array that store tasks that have not been completed
    const [taskList, setTaskList] = useState([]);
    // completedTaskList: array that stores tasks that have been completed
    const [completedTaskList, setCompletedTaskList] = useState([]);

    function handleChange(event) {
        /* [FORM ACTIVITY] 
            1. Write the handleChange function to store the task input value into the newTask useState variable. 
            Hint: You can get the task input value using event.target.value (since there is only one input element in the form)
        */
        // [Insert Code Below]

    }

    function handleSubmit(event) {
        /* [FORM ACTIVITY] 
            1. Write the handleSubmit function to prevent the default reload behavior
        */
       // [Insert Code Below]


        /* [FORM ACTIVITY] 
            1. Console log the new task once the submit button is clicked. 
            2. Clear the newTask state variable
        */
       // [Insert Code Below]

    }

    /*[LIST ACTIVITY] Uncomment the code below during the list activity */
    // function handleCheckbox(index) {
    //     // Resets error flag
    //     setHasError(false);
    //     // Adds the task associated with index into the completed task list
    //     setCompletedTaskList([...completedTaskList, taskList[index]]);
    //     // Removes the task associated with index from the to-do task list
    //     const newTaskList = [...taskList];
    //     newTaskList.splice(index, 1);
    //     // Update task list with removed task
    //     setTaskList(newTaskList);
    // }

    return (
        <div className="flex justify-center">
            <div className="border rounded-lg shadow p-10 mt-20 bg-gray-200">
                <h1 className="text-lg underline">To-Do List</h1>
                <form onSubmit={handleSubmit} >
                    <label className="mr-2">Task:</label>
                    <input 
                            type="text" 
                            name="taskInput" 
                            value={newTask}
                            onChange={handleChange} 
                            className="shadow border rounded mr-2"
                    />
                    <button 
                        type="submit" 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
                        Add
                    </button>
                    {
                        /* [CONDITIONAL RENDERING ACTIVITY] Render an error message if hasError is true */
                        // [Insert Code Below]
                        
                    }
                </form>
                {
                    /* [LIST ACTIVITY] 
                    Map the taskList such that every task will have an checkbox input element calling handleCheckbox on change and the text of the task.
                    Uncomment the code below during the list activity: */
                    // <ul> 
                    //     {
                    //         taskList.map((FILL IN, FILL IN) => (
                    //             <li key={FILL IN} className="flex items-center">
                    //                 <input 
                    //                     type="checkbox" 
                    //                     checked={false} 
                    //                     onChange={() => handleCheckbox(index)} 
                    //                     className='mr-2' />
                    //                 {task}
                    //             </li>
                    //         ))
                    //     }
                    // </ul>
                }
                {/* [AFTER LIST ACTIVITY] Uncomment when you have completed the list activity */}
                {/* <CompletedTask completedTaskList={completedTaskList}/> */}
            </div>
        </div>
    );
}
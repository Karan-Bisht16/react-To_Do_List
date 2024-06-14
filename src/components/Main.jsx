import React, { useState } from "react";

function Main() {
    const [taskName, setTaskName] = useState("");
    const [tasksArray, setTasksArray] = useState([]);

    function updateTaskName(event) {
        const { value } = event.target;
        setTaskName(value);
    }

    function addTask() {
        if (taskName.trim() !== "") {
            setTasksArray(prevTasksArray => {
                return [...prevTasksArray, taskName];
            });
        }
        setTaskName("");
    }

    function triggerAddTask(event) {
        if (event.keyCode === 13) {
            addTask();
        }
    }

    function strikeTask(event) {
        const striked = event.target.getAttribute("striked");
        if (striked === "false") {
            event.target.setAttribute("striked", "true");
        } else {
            event.target.setAttribute("striked", "false");
        }
    }

    function deletetask(event) {
        const index = event.target.getAttribute("index");
        setTasksArray(prevTasksArray => {
            let newArray = [];
            for (let i = 0; i < prevTasksArray.length; i++) {
                if (i != index) {
                    newArray.push(prevTasksArray[i]);
                }
            }
            return newArray;
        });
        console.log(tasksArray);
    }

    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <div className="form">
                <input type="text" value={taskName}
                    onChange={updateTaskName} onKeyUp={triggerAddTask}
                    autoFocus />
                <button onClick={addTask}>
                    <span>Add</span>
                </button>
            </div>
            <div>
                <ul>
                    {tasksArray.map((task, i) =>
                        <div className="taskLabel" key={i}>
                            <li onClick={strikeTask} striked="false">{task}</li>
                            <button onClick={deletetask} index={i}>-</button>
                        </div>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Main;
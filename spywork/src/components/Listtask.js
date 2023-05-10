import React from "react";

const Listtask =({task, index, deleteTask})=>{
    console.log('task.index', task,index);
    return(
        <>
            <div className="list-task">
                {task.task}
                <button  onClick={()=>{deleteTask(task.index)}}className="delete-btn">Delete</button>
            </div>
        </>
    );
};

export default Listtask;
import React, { useState } from "react";

const Addtask=({addTask})=>{
  const [value, setValue]= useState("");

  const addItem=()=>{
    addTask(value);
    setValue("");
  };
  return(
    <>
        <div className="inputcontainer">
            <input
               type="text"
               className="input"
               placeholder="Add a new task"
               value={value}
               onChange={(e)=>{setValue(e.target.value);
    }}/>
               <button onClick={addItem}className="addbtn">Add</button>
        </div>
        </>
  );

};

export default Addtask;
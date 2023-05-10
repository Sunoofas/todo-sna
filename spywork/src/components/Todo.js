import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../services/config.json";
import "./Todo.css";
import Addtask from "./Addtask";
import Listtask from "./Listtask";
import TrainingImage from "./assets/contactus.avif";
import { addTodoTask, deleteTodoList } from "./axiosDb";

export default function Todo () {
  const [tasks, setTasks] = useState([]);
  const [list, setList] = useState([]);
  useEffect(() => {
    getTodoList();
    document.title = `You have ${tasks.length} pending task(s)`;
  }, []);

  const getTodoList = async () => {
    const result = await axios
      .get(`${config.api_base_url}/api/todo`)
      .then((data) => {
        console.log(data);
        setList(data.data);
      })

      .catch((error) => {
        console.log(error);
      });
  };



  const addTask = (title) => {
    console.log("title", title);
    const newTask = [...tasks, { title }];
    addTodoTask(title);
    setTasks(newTask);
    window.location.reload()
  };

  const deleteTask = (index) => {
    const newTask = [...tasks];
    newTask.splice(index, 1);
    deleteTodoList(newTask);
    setTasks(newTask);
    window.location.reload()
    // console.log('index', index);
    // const newTask = [...tasks, {index}];
    // deleteTodoList(index);
    // setTasks(newTask);
  //   const newTodo = tasks.filter((tasks, index) =>index !==index);
  //  deleteTodoList(newTodo);

  // setTasks(tasks =>tasks.filter((tasks, i) =>i !==index));
    
  };
  // const deleteTask = async (id, index) => {
  //   try {
  //     await axios.delete(`/api/todos/${id}`);
  //     const newTasks = [...tasks];
  //     newTasks.splice(index, 1);
  //     setTasks(newTasks);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  console.log("list :>> ", list);

  return (
    <>
      <div
        className="todo-conatiner"
        style={{ backgroundImage: `url(${TrainingImage})` }}
      >
        <div className="header">TodoApp</div>
        <div className="addtask">
          <Addtask addTask={addTask} />
        </div>
        <div className="listtask">
          {list.map((task, index) => (
            <Listtask
              task={task}
              deleteTask={deleteTask}
              index={index}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}

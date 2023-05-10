import axios from 'axios';
import config from '../services/config.json';

const addTodoTask = async(tasks) =>{
    const data = { tasks};
    console.log('data :>> ', data);
    await axios.post(`${config.api_base_url}/api/todo`, data)
    .then((data)=>{
         console.log(data);
         return data
    })

    .catch((error)=>{
        console.log(error)
    })
};

const getTodoList = async()=>{
    
    console.log('inside gettodo');
    try{

        await axios.get(`${config.api_base_url}/api/todo`)
        .then((data)=>{
            console.log(data.data);
            return data.data;

            
       })
   
       .catch((error)=>{
           console.log(error)
       })
   

      
        
    }
    catch(err){
        console.log('err in gettodolist', err);
    }
     
}

// const deleteTodoList = async(tasks)=>{
//     const data = {tasks};
//     console.log('data :>> ', data);
//     await axios.delete(`${config.api_base_url}/api/todo`, data)
//     .then((data)=>{
//         console.log(data.data);
//     })
//     .catch((error)=>{
//         console.log(error);
// })
// }
const deleteTodoList = async (_id, setToDo) => {
    try {
        const response = await axios.delete(`${config.api_base_url}/todo/${_id}`);
        console.log(response);
        getTodoList(setToDo);
      } catch (err) {
        console.log(err);
      }

  };
export{addTodoTask,getTodoList, deleteTodoList}

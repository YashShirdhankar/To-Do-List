import React, {useState} from "react"


function ToDoList(){

  const [tasks,setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event){
    setNewTask(event.target.value);

  }
  function addTask(){

    if(newTask.trim() !==""){
       setTasks(t => [...t, newTask]);
       setNewTask("");
    }

  }
  function deleteTask(index){

    const updateTasks= tasks.filter((_, i) => i !== index);
    setTasks(updateTasks);


  }
  function moveTaskUpTask(index){
     if(index > 0){
        const updatedtasks = [...tasks];
        [updatedtasks[index],updatedtasks[index - 1]] =
        [updatedtasks[index - 1],updatedtasks[index]];
        setTasks(updatedtasks);       
    }

  }
  function moveTaskDownTask(index){
    
    if(index < tasks.length -1){
      const updatedtasks = [...tasks];
      [updatedtasks[index],updatedtasks[index + 1]]=
      [updatedtasks[index + 1],updatedtasks[index]];
      setTasks(updatedtasks);
    }
    
   

  }



  


  return (<div className="to-do-list">
            <h1>TO-DO-LIST</h1>

            <div>
              <input type="text"
              placeholder="Enter a task..."
              value={newTask}
              onChange={handleInputChange}/>
              <button className="add-button"
              onClick={addTask}>Add</button>


            </div>

            <ol>
                {tasks.map((task,index) =>
                 <li key={index}>
                 <span className="text">{task}</span>
                 <button
                       className="delete-button"
                       onClick={()=> deleteTask(index)}>
                        Delete 
                       </button>
                       <button
                       className="move-button"
                       onClick={()=> moveTaskUpTask(index)}>
                        UP 
                       </button> 

                       <button
                       className="down-button"
                       onClick={()=> moveTaskDownTask(index)}>
                        Down 
                       </button>    
                  </li>
                )}
            </ol>

          
            



            
              


               
      
  </div>)

}
export default ToDoList
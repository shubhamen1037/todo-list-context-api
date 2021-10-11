import React, { useContext } from 'react';
import { ContextApi } from '../../Context/ContextApi';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ListOfTask.css'
import Task from './Task';

const TaskList = () => {

   const data = useContext(ContextApi).data;
   const markedAsDone = useContext(ContextApi).markedAsDone; 

    return   <div className = "list-container">
          {
            data.map(task =>  <Task task = {task} key ={data.id} markedAsDone={markedAsDone}/>)
          }
      </div>
  }
export default TaskList;



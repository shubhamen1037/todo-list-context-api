import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../TaskList/Task.css';

const Task=(props)=> {

    
    const {task: { taskTopic, taskDiscription, date, id, markDone}, markedAsDone, } = props;


    return (
      <div className="container-task-list" style={{backgroundColor: markDone ? "lightgreen" : "palegoldenrod"}}>
        <div>
            <div className="task-topic">{ taskTopic }</div>
            <div className="discription">{ taskDiscription }</div>
        </div>
        <div className="infor">
            <div className="date-time">{ date }</div>
            <div>
            {markDone ? <p className="mark-done" >Completed</p> : <button  onClick={()=>markedAsDone(id)}> Marked As Done</button>}
            </div>
        </div>
      </div>
    )
}

export default Task;
import React, { useState, useContext } from 'react';
import { Form, Row, Col, Button, FloatingLabel} from 'react-bootstrap';
import { useHistory } from "react-router-dom"
import DateTimePicker from 'react-datetime-picker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ContextApi } from '../../Context/ContextApi';
import '../CreateTask/CreateTask.css'


const CreateTask = () =>{

    let history = useHistory()
    const [dateValue, setDateValue] = useState(new Date());
    const createTaskList = useContext(ContextApi).createTaskList;

    const submitData = (evt) => {
        evt.preventDefault();
        const formData = new FormData(evt.target);
        const newData = {};

        for (const [key, value] of formData) {
            if(value)
            newData[key] = value;
        } 
       
      
        createTaskList(newData)
        evt.target.reset();

        const location = {
          pathname: '/',
        }
        
        history.push(location)
        console.log(newData);
    }

  return (
    <div className="container">
      <Form onSubmit={submitData}>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}> Task: </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder="Task Topic"  name="taskTopic"/>
            </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
            <Form.Label column sm={2}> Date/Time: </Form.Label>
            <Col sm={10}>
              <DateTimePicker className="date-time"  name="date" value={dateValue} onChange={(value)=>{
                setDateValue(value)
              } }/>
            </Col>
        </Form.Group>
        <FloatingLabel controlId="floatingTextarea2" label="Write Here Task Discription Briefly....">
            <Form.Control as="textarea"  name="taskDiscription" placeholder="Write here Task Discription Briefly"  style={{ height: '300px', marginBottom:'20px' }} />
        </FloatingLabel>
        <Button variant="primary" type="submit" style={{ marginBottom:'20px' } }> Submit </Button>
  
      </Form>
      
         
    </div>  
  )
}

export default CreateTask;



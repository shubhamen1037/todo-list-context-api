import React from 'react';
import { Nav } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import TaskList from './Component/TaskList/ListOfTask';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Router.css';
import CreateTask from './Component/CreateTask/CreateTask';

const PageRouter = (props) =>{
    
    return (
    <Router>
        <div className="body">
            <Nav variant="tabs" defaultActiveKey="/" className="nav-bar">
                <Nav.Item>
                    <Link to="/" className="header">Task List</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/createtask" className="header">Creat List</Link>
                </Nav.Item>
                
            </Nav>
            
            <Switch>
                <Route path="/createtask">
                    <CreateTask />
                </Route>
                <Route path="/">
                    <TaskList/>
                </Route>
            </Switch>
        </div>
    </Router>
    )
}
 export default PageRouter;
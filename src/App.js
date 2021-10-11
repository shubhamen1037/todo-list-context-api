import React   from 'react';
import { ContextApiApp } from './Context/ContextApi';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './Router';


const App = (props) =>{
  
  
  return (
    <ContextApiApp>
        <Router />
    </ContextApiApp>
  )
}

export default App;



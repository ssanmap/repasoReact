import React, { Component } from 'react';
import './App.css';
import { Form } from './component/Form';
import Task from './component/Task';
import tasks from './task/task.json';



class App extends Component {

  state = {
    tasks: tasks
  }
  render() { 
    return (  <>
      <Form />
     <Task tasks={this.state.tasks} />
    </>);
  }
}
 
export default App;


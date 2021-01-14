import React from 'react'
import { TaskU } from './TaskU';

const Task = (props) => {

    
    return (
        
           props.tasks.map( (e) => <TaskU e={e} key={e.id} />)
        
    )
}

export default Task;

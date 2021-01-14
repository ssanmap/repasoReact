import React from 'react'
import { TaskU } from './TaskU';

const Task = (props) => {

    
    return (
        
           props.tasks.map( (e) => <TaskU e={e} key={e.id} 
            delete={props.delete}
            check={props.check}
           />
           )
        
    )
}

export default Task;

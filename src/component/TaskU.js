import React from 'react';
import  PropTypes  from 'prop-types'

export const TaskU = (props) => {
       
    function StyleAdd(props)  {

        return{
         fontSize: '20px',
         color: props.e.est ? 'gray' : 'black',
         textDecoration: props.e.est ? 'line-through' : 'none'
        } 
     
     }
    return (
        <div style={StyleAdd(props)}>
            {props.e.id} - 
            {props.e.name}- 
            {props.e.des}
            <input type="checkbox" />
            <button>x</button>
        </div>
    )
}


TaskU.propTypes = {
    e: PropTypes.object.isRequired
}
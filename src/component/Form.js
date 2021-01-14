import React, { useState } from 'react'

export const Form = (props) => {
    
   
  const [state, setstate] = useState({ name: '', des: ''})
    const handleSubmit = (e) => {
        e.preventDefault();
        const {name, des} = state
        props.add( name , des);
       
    }
     
    const handleChange = (e) => {
        const {name, value} = e.target
        setstate({...state, [name]: value})
    }
    return (
        <form onSubmit={handleSubmit}>
              <input type="text" placeholder="ingrese el texto aqui" onChange={handleChange} value={state.name} name="name"/>  
              <br />
              <textarea placeholder="ingrese description"    onChange={handleChange} value={state.des}  name="des" ></textarea>
              <input type="submit"/>
        </form>
    )
}

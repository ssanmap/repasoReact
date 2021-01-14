import React, { useState } from 'react'

export const Form = () => {
    

  const [state, setstate] = useState({ title: '', des: ''})
    const handleSubmit = (e) => {
        e.preventDefault();
        const {title, des} = state
        console.log(title, des);
        console.log(state);
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setstate({...state, [name]: value})
    }
    return (
        <form onSubmit={handleSubmit}>
              <input type="text" placeholder="ingrese el texto aqui" onChange={handleChange} value={state.title} name="title"/>  
              <br />
              <textarea placeholder="ingrese description"    onChange={handleChange} value={state.des}  name="des" ></textarea>
              <input type="submit"/>
        </form>
    )
}

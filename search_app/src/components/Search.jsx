import React from 'react'
import './styles/search.css'
export default function Search(props) {

  return (
    <div className='input'><input type="search" name="SearchInfo"
     id="Value"
     placeholder='Search by name...' value={props.inputValue} 
     onChange={props.handleChange}/>
     </div>
  )
} 

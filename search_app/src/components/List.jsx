import React,{useState} from 'react'
import './styles/list.css'
import {Profiles} from './Profiles'
import ProfileList from './ProfileList'
import Search from './Search'

export default function List() {
    const [inputValue, setinputValue] = useState('')

    const handleChange = (event) =>{
        const userName = event.target.value 
        setinputValue(userName)
    }

    const Details = Profiles.filter((person) => {
        const fullName = `${person.firstName} ${person.lastName}`
        return fullName.toLowerCase().includes(inputValue.toLowerCase())
    })
   return(
    <div className='list'>
        <Search inputValue={inputValue} handleChange={handleChange}/>
        <ProfileList Details={Details}/>
    </div>
  )
}

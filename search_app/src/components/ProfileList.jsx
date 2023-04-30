import React from 'react'
import './styles/list.css'

export default function ProfileList(props) {
  return (
    <div>
        <ul className='profilelist'>
         {props.Details.map((user)=>{
            return(
                
                <li key={user.id} >
                    
                 <div className='container'>
                    <div>
                    <img src={user.picture} alt="profile" width={"55px"} />
                    </div>
                    <div>
                        <p>{user.id}</p>
                        <span className='subcontainer'>
                            <div>
                            <p>{user.title}</p>
                            </div>
                            <div>
                            <p>{user.firstName}</p>
                            </div>
                            <div>
                            <p>{user.lastName}</p>
                            </div>
                        </span>
                    </div>
                 </div>
                    
                </li>
                
            )
         })}
        </ul>
    </div>
  )
}

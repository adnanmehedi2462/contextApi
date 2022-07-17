import React,{useContext} from 'react'
import { UserContext } from './Context'
export const Sub2 = () => {
    const {user}=useContext(UserContext)
    console.log(user)
  return (
    <div>
        <h1>{user.name}</h1>
        <h1>{user.age}</h1>
        
    </div>
  )
}

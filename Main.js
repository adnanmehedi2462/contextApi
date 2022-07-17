import React, { useState,useContext } from 'react'
import { Sub1 } from './Sub1'
import { UserContext } from './Context'
export const Main = () => {
    const [user,setUser]=useState({
        name:"adnan",
        age:23
    })
  return (
    <>
    <UserContext.Provider value={{user}}>
   
   
    <Sub1 />
   </UserContext.Provider>
    </>
  )
}

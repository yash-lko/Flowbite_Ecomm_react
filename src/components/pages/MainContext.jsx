import React, { createContext, useState } from 'react'


export  let MyGlobalContext = createContext()


export default function MainContext({ children }) {
  const [cart, setCart] = useState([])

  let obj = {cart, setCart}
  return (
    <MyGlobalContext.Provider value={obj}>
      {children}
    </MyGlobalContext.Provider>
  )
}

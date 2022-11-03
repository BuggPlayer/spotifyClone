import React, { useState, createContext } from 'react'

export const ToggleContext = createContext()

const ToggleContextProvider = ({children}) => {
    const [Play, setPlay] = useState(true);

  return (
    <ToggleContext.Provider value={{Play, setPlay}}>
        {children}
    </ToggleContext.Provider>
  )
}

export default ToggleContextProvider
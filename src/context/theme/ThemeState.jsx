import React, { useState, useEffect } from 'react'
import { ThemeContext } from './ThemeContext'

let element = window.document.body

const ThemeState = (props) => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    element.classList.remove(...element.classList)
    element.classList.add(theme)
  }, [theme])

  const handleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        handleTheme
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeState

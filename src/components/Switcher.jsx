import React, { useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../context/theme/ThemeContext'
import './Switcher.css'

import { BiMoon, BiSun } from 'react-icons/bi'

const Switcher = () => {
  const { theme, handleTheme } = useContext(ThemeContext)

  const ThemeToggler = () => {
    if (theme === 'dark') {
      return <BiSun className='switcher__icon' onClick={handleTheme} />
    } else {
      return <BiMoon className='switcher__icon' onClick={handleTheme} />
    }
  }

  return (
    <div className='switcher'>
      <ThemeToggler />
    </div>
  )
}

export default Switcher

import React from 'react'
import { useGlobalContext } from '../context'
import { GrSun, GrMoon } from 'react-icons/gr'

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext()
  return (
    <section className='toggle-container'>
      <button className='dark-toggle' onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <GrSun className='toggle-icon' />
        ) : (
          <GrMoon className='toggle-icon' />
        )}
      </button>
    </section>
  )
}

export default ThemeToggle

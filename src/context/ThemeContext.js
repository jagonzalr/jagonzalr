import React, { createContext } from 'react'
import { useDarkTheme } from 'use-dark-theme'

const ThemeContext = createContext(['light', () => {}])

const ThemeProvider = ({ children }) => {
	return (
		<ThemeContext.Provider value={useDarkTheme(false, { storageKey: 'jagonzalrTheme' })}>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeContext
export { ThemeProvider }

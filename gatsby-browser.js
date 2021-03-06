import React from 'react'

import { ThemeProvider } from './src/context/ThemeContext'
import 'bootstrap/dist/css/bootstrap.min.css'

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)

import Content from './Content'
import { ThemeContext, ThemeProvider } from './ThemeContext'
import './App.css'
import { useContext } from 'react'
// Context
// CompA => CompB => CompC
// Bo di B thi van co the chay CompA => CompC
// Theme: Dark / Light

// 1. Create context
// 2. Provider
// 3. Consumer

function App () {
  const context = useContext(ThemeContext)
  return (
    <ThemeProvider>
      <div>
        <button onClick={context.toggleTheme}>Toggle theme</button>
        <Content />
      </div>
    </ThemeProvider>
  )
}

export default App

import React from 'react'
import Todo from './components/Todo'
import "./css/Main.css"
import DisplayTodos from './components/DisplayTodos'

const App = () => {
  return (
    <div className='App'>
    <h1>To Do List</h1>
      
        
   <Todo />
   <DisplayTodos />
   </div>
    
  )
}

export default App

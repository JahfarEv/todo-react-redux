import React from 'react'
import Todo from './components/Todo'
import "./css/Main.css"
import DisplayTodos from './components/DisplayTodos'
import {motion} from 'framer-motion';

const App = () => {
  return (
    <div className='App'>
    <motion.h1 
    initial={{y: -200}}
    animate={{y: 0}}
    transition={{ type: "spring", duration: 0.5}}
    whileHover={{scale: 1.1}}>To Do List</motion.h1>
      
        <motion.div 
        initial={{y: 1000}}
    animate={{y: 0}}
    transition={{ type: "spring", duration: 1}}>
        <Todo />
   <DisplayTodos />
        </motion.div>
  
   </div>
    
  )
}

export default App

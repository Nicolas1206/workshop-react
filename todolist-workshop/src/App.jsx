import { useState } from 'react'
import Header from './components/Header.jsx';
import AddTodo from './components/AddTodo.jsx'
import ListTodos from './components/ListTodos.jsx';
function App() {
  

  return (
   
    <main className='container'>
        <Header />

         <AddTodo />

         <ListTodos />

      </main>
    
  )
}

export default App

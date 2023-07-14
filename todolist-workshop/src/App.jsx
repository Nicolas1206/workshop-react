import { useEffect, useState } from 'react'
import Header from './components/Header.jsx';
import AddTodo from './components/AddTodo.jsx'
import ListTodos from './components/ListTodos.jsx';
import { v4 as uuidv4 } from 'uuid';
const LSKEY = "MyTodoApp";
function App() {
  const [todos, setTodos] = useState([]);
  const [firstLoad, setFirstLoad] = useState(true);
//   const handleClick = (e) => {
//     const newTodos = [...todos];
//     newTodos.push("This is a new todo");
//     setTodos(newTodos);
// }
// const initTodos = [
//   {
//   id: uuidv4(),
//   name: "Apprendre React",
//   done: false
// },
// {
//   id: uuidv4(),
//   name: "Faire la vaisselle",
//   done: false
// } ,
// {
//   id: uuidv4(),
//   name: "Faire un jogging",
//   done: false
// } 
// ];


const changeTodoStatus = (id) => {
  const newTodos = todos.map((todo) => {
      if (todo.id === id) {
          todo.done = !todo.done;
      }
      return todo;
  });
  setTodos(newTodos);
}
const deleteTodo = (id) => {
  const newTodos = todos.filter ((todo) => {
    return todo.id !== id;
  })
  setTodos(newTodos);
  }
  


  const addNewTodo = (newTodoName) => {
    const newTodo = {
      id: uuidv4(), //uuid
      name: newTodoName,
      done: false
    };
    const newTodos = [...todos];
    newTodos.push(newTodo);
    setTodos(newTodos);
  }
  useEffect(() => {
    if (!firstLoad) {
      window.localStorage.setItem(LSKEY + ".todos", JSON.stringify(todos));

    }else {
      setFirstLoad(false)
    }
  }, [todos, firstLoad]);

  useEffect(() => {
    const initialTodos = JSON.parse(window.localStorage.getItem(LSKEY + '.todos'))
    setTodos(initialTodos);
  }, [])

  return (
   
    <main className='container'>
        <Header />

         <AddTodo addNewTodo={addNewTodo}/>

         <ListTodos todos={todos} changeTodoStatus={changeTodoStatus} deleteTodo={deleteTodo}/>

      </main>
    
  )
}

export default App

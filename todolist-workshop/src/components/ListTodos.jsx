import { useState } from "react";

export default function ListTodos() {
    const initTodos = [
        {
        id: "1",
        name: "Apprendre React",
        done: false
    },
    {
        id: "2",
        name: "Faire la vaisselle",
        done: false
    } ,
    {
        id: "3",
        name: "Faire un jogging",
        done: false
    } 
];
    const [todos, setTodos] = useState(initTodos);
    const handleCheckboxClick = (e) => {
        const newTodos = todos.map((todo) => {
            if (todo.id === e.target.id){
                todo.done = !todo.done;
            }
            return todo;
        });
        setTodos(newTodos);
    }
    return (
        <section>
        <h2>Todos</h2>
        <ul>
            {todos.map((todo, index) => (
            <li key={index}>
            <input type="checkbox" id={todo.id} checked={todo.done} onChange={handleCheckboxClick}/> 
            {todo.name}
            </li>
            ))}
        </ul>
        {/* <button onClick={handleClick}>Add a todo</button> */}
        </section>
    );
}
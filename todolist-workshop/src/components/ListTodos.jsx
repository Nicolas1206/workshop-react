import { useState } from "react";

export default function ListTodos({todos, changeTodoStatus, deleteTodo}) {
    
    
    return (
        <section>
        <h2>Todos</h2>
        <ul>
            {todos.map((todo, index) => (
            <li key={index}>
            <input 
            type="checkbox" 
            id={todo.id} 
            checked={todo.done} 
            onChange={ () => {changeTodoStatus(todo.id)}}
            /> 
            {todo.name}
            <button role="button" onClick={ () => {deleteTodo(todo.id)}}>Delete</button>
            </li>
            ))}
        </ul>
        {/* <button onClick={handleClick}>Add a todo</button> */}
        </section>
    );
}
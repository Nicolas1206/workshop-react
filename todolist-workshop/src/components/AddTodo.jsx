import { useRef } from "react";



export default function AddTodo({addNewTodo}) {
    const inputRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault();
        addNewTodo(inputRef.current.value)
        inputRef.current.value= "";
    }
    return (
         /* // form pour ajouter un todo */
         <form action="#" method='POST' onSubmit={handleSubmit}>
         <input ref={inputRef} type="text" name="newTodo" placeholder='Create a new todo' />
         <button type='submit' >Create</button>
       </form>
    );
}
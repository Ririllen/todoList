import { useState, useEffect } from "react";

export default function useTodos() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {             
        async function extract_todos() {
            const todosList = await fetch('https://dummyjson.com/todos')
                            .then(res => res.json());
    
            setTodos(todosList.todos);
        }

        extract_todos();
        }
    ,[]);

    return todos;
}
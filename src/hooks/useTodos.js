import { useState, useEffect } from "react";

export default function useTodos() {
    const [firstTodostodos, setFirstTodos] = useState([]);

    useEffect(() => {             
        async function extract_todos() {
            const todosList = await fetch('https://dummyjson.com/todos')
                            .then(res => res.json());
    
            setFirstTodos(todosList.todos);
        }

        extract_todos();
        }
    ,[]);
        
    return firstTodostodos;
}
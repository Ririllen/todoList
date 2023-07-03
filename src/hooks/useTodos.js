import { useState, useEffect } from "react";

export default function useTodos() {
    const [firstTodostodos, setFirstTodos] = useState([]);

    useEffect(() => {             
        async function extract_todos() {
            const todosList = await fetch('https://dummyjson.com/todos')
                            .then(res => res.json());
    
            const todos = todosList.todos.map((element) => ({...element, state : (element.completed === true) ? 'COMPLETED' : 'ONGOING' }));

            setFirstTodos(todos);
        }

        extract_todos();
        }
    ,[]);
        
    return firstTodostodos;
}
import { useTodosContext } from "src/hooks/useTodosContext"
import Items from 'src/components/Items.js'
import NewItem from 'src/components/NewItem'
import { useState } from "react";

export default function TodoList() {
    const {todos, navState, itemState} = useTodosContext();

    // const [todosForDisplay, setTodosForDisplay] = useState([]);

    // if (todos.length > 0) {
    //     setTodosForDisplay(todos);
    // }
    // else { return <div>Loading</div>; }

    const addnewItem = (value) => {
        const maxId = Math.max(...todos.map(todo => todo.id));  
        value.id = maxId + 1;
    
        todos.push(value);

    }

    const filteredTodos = (itemState.state === 'ITEM_DELETE')? todos.filter(todo => todo.id !== itemState.id): todos;
    console.log(itemState);


    return (
         ( navState === 'NEW') ? (<NewItem newItem={addnewItem}/>) : 
         (navState === 'ALL') ? (<Items todos={filteredTodos}/>) : 
         (navState === 'COMPLETED' ) ? (<Items todos={filteredTodos.filter(todo => todo.completed === true)} />) : 
         (navState === 'ONGOING' ) ? (<Items todos={filteredTodos.filter(todo => todo.completed === false)}/>) : null 
        
    );
}
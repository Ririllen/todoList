import { useTodosContext } from "src/hooks/useTodosContext"
import Items from 'src/components/Items.js'
import NewItem from 'src/components/NewItem'
import { useEffect } from "react";

export default function TodoList({firstTodos}) {
    const { todos, setTodos, navState, itemState , setItemState} = useTodosContext();

    useEffect(() => 
      setTodos(firstTodos)
    ,[firstTodos]);

    useEffect(() => {
        setTodos(filteredTodosCompleted);
        console.log(itemState);
        setItemState({ id: itemState.id,  state: ''});
        },
        [itemState.state]);     

    const addnewItem = (value) => {

        if (todos.length > 0) {
        const maxId = Math.max(...todos.map(todo => todo.id));  
        value.id = maxId + 1;} else value.id = 1;
    
        todos.push(value);
        setTodos(todos);
    }
    


    const filteredTodos = (itemState.state === 'ITEM_DELETE')? 
    todos.filter(todo => todo.id !== itemState.id) : todos;

    useEffect(() => {
      setTodos(filteredTodos);
      console.log(todos);
      setItemState({ id: 0,  state: ''});
      },
      [itemState.state]);        

    const filteredTodosCompleted = (itemState.state === 'ITEM_COMPLETED')? 
          todos.map((todo) => { 
            let valueOfCompleted = todo.completed;
            todo.completed = (todo.id === itemState.id) ? true : valueOfCompleted ; 
                              return todo})
          : todos;
   

    return (
         ( navState === 'NEW') ? (<NewItem newItem={addnewItem}/>) : 
         (navState === 'ALL') ? (<Items todos={todos}/>) : 
         (navState === 'COMPLETED' ) ? (<Items todos={todos.filter(todo => todo.completed === true)} />) : 
         (navState === 'ONGOING' ) ? (<Items todos={todos.filter(todo => todo.completed === false)}/>) : null 
        
    );
}
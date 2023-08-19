'use client'
import { useTodosContext } from "src/hooks/useTodosContext"
import Items from 'src/components/Items.js'
import NewItem from 'src/components/NewItem'
import { useEffect, useState } from "react";
import { saveTodoItemsToLocalStorage } from 'src/service/service.js';


  export default function TodoList() {
    const { navState, itemState , setItemState, setNrTodos} = useTodosContext();
    const [todos, setTodos] = useState([]);

    useEffect(
      ()=>{

          const storageValue = localStorage.getItem('list');
  
          try {
              const storageValueJSON = JSON.parse(storageValue);
          
              if (Array.isArray(storageValueJSON)) {
                  setTodos(storageValueJSON); 
                  setNrTodos(storageValueJSON.length);

                  console.log("data from storage");
              }
          } catch(e) {
              console.log(e);
          }        
      }
    ,[]);
  

    const addnewItem = (value) => {

        if (todos && todos.length > 0) {
        const maxId = Math.max(...todos.map(todo => todo.id));  
        value.id = maxId + 1;} else value.id = 1;
    
        todos.push(value);
        // setTodos(todos);

        saveTodoItemsToLocalStorage('list',todos);    

    }
           

    if (itemState.state === 'ITEM_DELETE') {
      const searchIndex = todos.findIndex((todo) => todo.id == itemState.id);
      todos.splice(searchIndex,1);
      saveTodoItemsToLocalStorage('list',todos);
      setItemState({ id: 0,  state: ''});
    } 
    

    if (itemState.state === 'ITEM_COMPLETED') {
      const searchIndex = todos.findIndex((todo) => todo.id == itemState.id);
      todos[searchIndex].completed = true;
      saveTodoItemsToLocalStorage('list',todos);
      setItemState({ id: itemState.id,  state: ''});
    }

    console.log(todos, "from TodoList");  

    return ( 
         ( navState == 'NEW') ? (<NewItem newItem={addnewItem}/>) : 
         (navState == 'ALL') ? (<Items setTodos={setTodos} todos={todos}/>) : 
         (navState == 'COMPLETED' ) ? (<Items todos={ todos ? todos.filter(todo => todo.completed === true) : null } />) : 
         (navState == 'ONGOING' ) ? (<Items todos={ todos ? todos.filter(todo => todo.completed === false): null }/>) : null 
    );
}
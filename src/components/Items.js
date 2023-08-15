import Item from "./Item";
import { useRef } from "react";
import { saveTodoItemsToLocalStorage } from 'src/service/service.js';


export default function Items({todos, setTodos}) {

    const dragItem = useRef();
    const dragOverItem = useRef();

    const dragStart = (e, position) => {
        if (setTodos) {
            dragItem.current = position;
            console.log(e.target.innerHTML);
        }    
      };

    const dragEnter = (e, position) => {
        if (setTodos) {
            dragOverItem.current = position;
            console.log(e.target.innerHTML);
        }
    };  

    const drop = (e) => {
        if (setTodos) {
            const copyListItems = [...todos];
            const dragItemContent = copyListItems[dragItem.current];
            copyListItems.splice(dragItem.current, 1);
            copyListItems.splice(dragOverItem.current, 0, dragItemContent);
            dragItem.current = null;
            dragOverItem.current = null;
            setTodos(copyListItems);
            saveTodoItemsToLocalStorage('list',copyListItems);
        };
      };
    
    return ( <>
        {todos && todos.map( (todo,index) => 
            <Item 
            dragStart={dragStart} 
            dragEnter={dragEnter}
            drop={drop}
            index={index}
            key={index} stateInternal={todo.state} 
            id = {todo.id} content={todo.todo} 
            completed={todo.completed}/>)}
            </>);
}
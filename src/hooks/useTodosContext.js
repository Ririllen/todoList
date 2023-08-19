'use client'
// import { getToDoItemsFromLocalStorage } from "@/service/service";
import { createContext, useContext, useEffect, useState } from "react";

export const TodosContext = createContext();


export function TodosProvider(props) {

    const { children } = props;
    // const list = getToDoItemsFromLocalStorage('list'); 
    // const [todos, setTodos] = useState([]);

    // useEffect(()=>{
    //   setTodos(list);
    // }
    //   ,[]);
    

    // console.log(todos,"Provider");

    const [navState, setNavState] = useState('ALL');
    const [itemState, setItemState] = useState({ id: 0,  state: ''});

        
    return (
      <TodosContext.Provider
        value={{
          // todos , 
          // setTodos,
          navState,
          setNavState,
          itemState, 
          setItemState
        }}
      >
        {children}
      </TodosContext.Provider>
    );
  }


export function useTodosContext() {
    const todosContext = useContext(TodosContext);

    if (todosContext === undefined) {
        throw Error("useTodosContext should be used inside TodoProvider");
    }

    return todosContext;
}
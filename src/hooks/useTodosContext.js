import { createContext, useContext, useState } from "react";
import useTodos from "./useTodos";

export const TodosContext = createContext();


export function TodosProvider(props) {

    const { children } = props;
  
    const [navState, setNavState] = useState('');
    const [itemState, setItemState] = useState('');

    const todos = useTodos();
  
    return (
      <TodosContext.Provider
        value={{
          todos , 
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
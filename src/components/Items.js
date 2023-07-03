import Item from "./Item";


export default function Items({todos}) {
    return ( <>
        {todos.map( todo => <Item key={todo.id} stateInternal={todo.state} id = {todo.id} content={todo.todo} completed={todo.completed}/>)}
            </>);
}
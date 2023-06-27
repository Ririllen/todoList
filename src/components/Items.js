import Item from "./Item";


export default function Items({todos}) {

    return ( <>
        {todos.map( todo => <Item key={todo.id} id = {todo.id} content={todo.todo} />)}
            </>);
}
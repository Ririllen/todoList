"use client"
import { TodosProvider } from '@/hooks/useTodosContext'
import styles from './page.module.css'
import NavBar from '@/components/NavBar'
import TodoList from '@/components/TodoList'

export default function Home() {

  return (
    
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.h1}>To Do List</h1>
          <TodosProvider>
            <NavBar />
            {/* <TodoList firstTodos={todos}/>  */}
            <TodoList /> 
          </TodosProvider>
        </div>  
      </main>
  )
}


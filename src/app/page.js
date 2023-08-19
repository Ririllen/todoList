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
            
            {/* <nav className={styles.pagination_container}>
              <button className={styles.pagination_button} id="prev-button" title="Previous page" aria-label="Previous page">
                &lt;
              </button>
              
              <div id="pagination-numbers">
              </div>
              
              <button className={styles.pagination_button} id="next-button" title="Next page" aria-label="Next page">
                &gt;
              </button>
            </nav>             */}
          </TodosProvider>
        </div>  
      </main>
  )
}


"use client"

import styles from './page.module.css'

import NavBar from '@/components/NavBar'
import TodoList from '@/components/TodoList'
import { TodosProvider } from '../hooks/useTodosContext'
import useTodos from '@/hooks/useTodos'

export default function Home() {
  
  const todos = useTodos();

  return (
    
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.h1}>To Do List</h1>
          <TodosProvider>
            <NavBar />
            <TodoList firstTodos={todos}/> 
          </TodosProvider>
        </div>  
      </main>
  )
}


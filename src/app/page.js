"use client"

import styles from './page.module.css'

import NavBar from '@/components/NavBar'
import TodoList from '@/components/TodoList'
import { TodosProvider } from '../hooks/useTodosContext'

export default function Home() {

  return (
    <TodosProvider>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.h1}>To Do List</h1>
          <NavBar/>
          <TodoList/> 
        </div>  
      </main>
    </TodosProvider>
  )
}


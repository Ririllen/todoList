import { useEffect } from 'react';
import styles from 'src/app/page.module.css';
import { useTodosContext } from 'src/hooks/useTodosContext';

export default function NavBar({firstTodos}) {
  const { setTodos, setNavState} = useTodosContext();
  
  useEffect(() => 
    setTodos(firstTodos)
  ,[firstTodos]);

    const handleOnClickViewAll = () => {
      setNavState('ALL');
    }
  
    const handleOnClickCompleted = () => {
      setNavState('COMPLETED');
    }  
  
    const handleOnClickOngoing = () => {
      setNavState('ONGOING');
    }
  
    const handleOnClickPlus = () => {
      setNavState('NEW');
    }
  
    return (
            <div className={styles.nav}>
                <div onClick={handleOnClickViewAll}>VIEW ALL</div>
                <div onClick={handleOnClickCompleted}>COMPLETED</div>
                <div onClick={handleOnClickOngoing}>ONGOING</div>
                <div onClick={handleOnClickPlus}>+</div>
            </div>
            );
}
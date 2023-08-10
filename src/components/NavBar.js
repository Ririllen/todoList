import styles from 'src/app/page.module.css';
import { useTodosContext } from 'src/hooks/useTodosContext';

export default function NavBar() {
  const { setNavState} = useTodosContext();
  

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
                <div onClick={handleOnClickPlus}>ADD +</div>
            </div>
            );
}
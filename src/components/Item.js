// import IconPage from './IconPage'
import styles from './item.module.css'
import { useTodosContext } from '@/hooks/useTodosContext';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

export default function Item({id,content}) {
    const {itemState,setItemState} = useTodosContext();

    const handleOnClickTrash = () => {
        setItemState({ id: id,  state: 'ITEM_DELETE'});
    }

    const handleOnClickComplete = () => {
        setItemState({ id: id,  state: 'ITEM_COMPLETE'});
    }    

    return <div className={styles.item}>
            {content}{id}

                <div className={styles.icons}>
                    <FontAwesomeIcon icon={faPenToSquare} className={styles.icon}/>
                    <FontAwesomeIcon icon={faCheck} onClick={handleOnClickComplete} className={styles.icon}/>
                    <FontAwesomeIcon icon={faTrashCan} onClick={handleOnClickTrash} className={styles.icon}/>
                </div> 
           </div>;
}
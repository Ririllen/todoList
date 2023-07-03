import styles from './item.module.css'
import { useTodosContext } from '@/hooks/useTodosContext';
import Editable from '@/components/Editable'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

export default function Item({id,content,completed,stateInternal}) {
    const {setItemState} = useTodosContext();
    // const [edit, setEditable] = useState(false);

    const [state, setState] = useState(stateInternal);

    const handleOnClickTrash = () => {
        setItemState({ id: id,  state: 'ITEM_DELETE'});
        // setState('DELETE');
    }

    const handleOnClickComplete = () => {
        setItemState({ id: id,  state: 'ITEM_COMPLETED'});
        setState('COMPLETE');
    }    

    const handleOnClickEdit = () => {
        // setItemState({ id: id,  state: 'ITEM_EDIT'});
        // setEditable(true);
        setState('EDIT');
    }

    return  <div className={styles.div}>
            <div className={styles.item}>
                { (state === 'EDIT')? (<Editable contentExternal={content} id={id}/>) 
                        : content}
            </div>

            <div className={styles.icons}>
            { (state === 'EDIT') ? (<button>SAve</button>): null}
            
            { (!completed && (state !== 'EDIT') ) ? (<FontAwesomeIcon icon={faPenToSquare} onClick={handleOnClickEdit} className={styles.icon}/>) : null }
            { (!completed && (state !== 'EDIT') ) ? (<FontAwesomeIcon icon={faCheck} onClick={handleOnClickComplete} className={styles.icon}/>): null }
             
            { (state !== 'EDIT') ? (<FontAwesomeIcon icon={faTrashCan} onClick={handleOnClickTrash} className={styles.icon}/>) : null }
            
            </div> 
            </div>;
}
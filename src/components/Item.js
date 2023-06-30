import styles from './item.module.css'
import { useTodosContext } from '@/hooks/useTodosContext';
import Editable from '@/components/Editable'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

export default function Item({id,content,completed}) {
    const {setItemState} = useTodosContext();
    const [edit, setEditable] = useState(false);

    const handleOnClickTrash = () => {
        setItemState({ id: id,  state: 'ITEM_DELETE'});
    }

    const handleOnClickComplete = () => {
        setItemState({ id: id,  state: 'ITEM_COMPLETED'});
    }    

    const handleOnClickEdit = () => {
        setItemState({ id: id,  state: 'ITEM_EDIT'});
        setEditable(true);
    }

    return  <div className={styles.div}>
            <div className={styles.item}>
                { (edit)? (<Editable contentExternal={content} id={id}/>) 
                        : content}
            </div>

            <div className={styles.icons}>
            { (edit) ? (<button>SAve</button>): null}
            
            { (!completed && !edit) ? (<FontAwesomeIcon icon={faPenToSquare} onClick={handleOnClickEdit} className={styles.icon}/>) : null }
            { (!completed && !edit) ? (<FontAwesomeIcon icon={faCheck} onClick={handleOnClickComplete} className={styles.icon}/>): null }
             
            { (!edit) ? (<FontAwesomeIcon icon={faTrashCan} onClick={handleOnClickTrash} className={styles.icon}/>) : null }
            
            </div> 
            </div>;
}
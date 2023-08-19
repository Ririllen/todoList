import styles from './item.module.css'
import { useTodosContext } from '@/hooks/useTodosContext';
import Editable from '@/components/Editable';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';


export default function Item({saveValue, dragStart, dragEnter, drop, 
                              index,id,content,completed,stateInternal}) {

    const {setItemState, curr, prev} = useTodosContext();
    // const [edit, setEditable] = useState(false);
    const [contentE , setContentE ] = useState(content);
    // const [current, setCurrent] = useState(content);

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
        setContentE(content);
        setState('EDIT');
    }

    const handleClickSave = () => {
        saveValue(contentE,id);
        setContentE(contentE);
        setState('NEW');
    }

    const hide = (index >= prev && index < curr) ? {display: ""} : {display: "none"};

    return  <div className={styles.div}
            style={hide}
            draggable
            onDragStart={(e) => dragStart(e, index)} 
            onDragEnter={(e) => dragEnter(e, index)}
            onDragEnd={drop}
            >
                <div className={styles.item}>
                    { (state === 'EDIT')? (<Editable setContentE={setContentE} contentExternal={contentE} id={id}/>) 
                            : content}       
                </div>

                <div className={styles.icons}>
                { (state === 'EDIT') ? (<button onClick={handleClickSave}>save</button>): null}
                
                { (!completed && (state !== 'EDIT') ) ? (<FontAwesomeIcon title={"edit"} icon={faPenToSquare} onClick={handleOnClickEdit} className={styles.icon}/>) : null }
                { (!completed && (state !== 'EDIT') ) ? (<FontAwesomeIcon title={"complete"} icon={faCheck} onClick={handleOnClickComplete} className={styles.icon}/>): null }
                
                { (state !== 'EDIT') ? (<FontAwesomeIcon title={"delete"} icon={faTrashCan} onClick={handleOnClickTrash} className={styles.icon}/>) : null }
                
                </div> 
            </div>;
}
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons'
import styles from './newitem.module.css';


export default function NewItem({newItem}) {

    const [item, setItem] = useState('');
  
    const handleOnChange = (event) => {
      setItem(event.target.value);
    };

    const handleSubmit = (event) => {
      event.preventDefault();  //prevents page refresh
      const itemObj = {id: 0, todo: item, state: 'NEW', completed: false };
      newItem(itemObj);  
      setItem('');    
    }    

    return <div className={styles.inputDiv}>
            <form onSubmit={handleSubmit}>
                <input value={item} className={styles.input} type="text" onChange={handleOnChange} />
                <button type="submit" style={{"border": 0, "background": 'none'}}>
                  <FontAwesomeIcon icon={faFloppyDisk}  className={styles.icon}/>
                </button>
            </form>    
           </div>;
}
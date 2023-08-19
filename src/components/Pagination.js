import { useEffect } from 'react';
import styles from './pagination.module.css'
import { useTodosContext } from "src/hooks/useTodosContext"

export default function Pagination() {
    const { nrTodos, setCurr, setPrev} = useTodosContext();

    const ITEMS_PER_PAGE = 5;
    const nrPages = Math.ceil(nrTodos/ITEMS_PER_PAGE);
    const pageNumbers = [];
    let   currentPage ;

    const setCurrentPage = (pageNum) => {
        currentPage = pageNum;

        const prevRange = (pageNum - 1) * ITEMS_PER_PAGE;
        const currRange = pageNum * ITEMS_PER_PAGE;

        setCurr(currRange);
        setPrev(prevRange);

        console.log(pageNum);
        // return [prevRange,currRange];
      };    

      const handleOnClickButton = (e) => {
        console.log(e.target.innerHTML);
        setCurrentPage(Number(e.target.innerHTML));
      }

    for(let i=1; i<= nrPages; i++)
    {
        const button = <button key = {i}
                        className = {styles.pagination_number} 
                        page_index = {i}
                        onClick={handleOnClickButton}
                        >
                            {i}
                        </button>;

        pageNumbers.push(button);
    }

    useEffect(()=>{
        setCurrentPage(1);
    },[]);

    return (
        <nav className={styles.pagination_container}>
              <button className={styles.pagination_button} id="prev-button" title="Previous page" aria-label="Previous page">
                &lt;
              </button>
              
              <div id="pagination-numbers" >
                {/* <p>{nrTodos} items, and nr of Pages {nrPages}
                </p> */}
                {pageNumbers}
              </div>
              
              <button className={styles.pagination_button} id="next-button" title="Next page" aria-label="Next page">
                &gt;
              </button>
            </nav>
    );
}
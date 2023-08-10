'use client'
import { useEffect, useRef } from "react";

export const getToDoItemsFromLocalStorage = (storageKey) => {
    let todoItems = useRef([]);
    let storageValue ;

    useEffect(() => {
        storageValue = localStorage.getItem(storageKey);

        try {
            const storageValueJSON = JSON.parse(storageValue);
        
            if (Array.isArray(storageValueJSON)) {
                todoItems.current = storageValueJSON;
            }
        } catch(e) {
            console.log(e);
        }        
    })

        
    
    // console.log(todoItems.current,"result");
    return todoItems.current;
};

export const saveTodoItemsToLocalStorage = (storageKey, storageValue) => {
    localStorage.setItem(storageKey, JSON.stringify(storageValue))
};
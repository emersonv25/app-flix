import { useCallback, useRef } from "react"


export const useDebounce = () => {

    const isFirstTime = useRef(true);

    const debounce = useCallback((func: () => void) => {
        if(isFirstTime.current)
        {
            isFirstTime.current = false;
            func()
        }
    }, [])  
    
    return {debounce}
}

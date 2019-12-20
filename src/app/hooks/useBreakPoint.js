import {useEffect, useState, useRef} from "react"
import { throttle } from "lodash" 

// inspired from this link 
// https://gist.github.com/gaearon/cb5add26336003ed8c0004c4ba820eae#file-usewindowwidth-js
export const useBreakPoint = (breakpoint) => {
    const oldWidth = useRef(window.innerWidth);
    const [fired, setFired] = useState(false);
    
    useEffect(() => {
        // for the first initialization;
        if(window.innerWidth < breakpoint) setFired(true);

        const handleResize = () => {
            // if the screen get smaller than breakpoint
            if( (window.innerWidth < breakpoint && oldWidth.current >= breakpoint)) { setFired(true); } 
            // if the screen get greater than breakpoint
            if((window.innerWidth >= breakpoint && oldWidth.current < breakpoint)){ setFired(false); }
            oldWidth.current = window.innerWidth;
        }

        window.addEventListener('resize', throttle(handleResize, 300));
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    return fired;
}
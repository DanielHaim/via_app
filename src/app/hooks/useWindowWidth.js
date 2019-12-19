import {useEffect, useState} from "react"
import { throttle } from "lodash" 

// https://gist.github.com/gaearon/cb5add26336003ed8c0004c4ba820eae#file-usewindowwidth-js
export const useWindowWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);
    
    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener('resize', throttle(handleResize, 300));
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    });
    
    return width;
}
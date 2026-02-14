import { useState, useEffect } from "react";

function useResponsive() {
    const [width, setWidth] = useState(
        typeof window !== 'undefined' ? window.innerWidth : 0
    );

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => removeEventListener('resize', handleResize);
    }, []);

    return {
        isMobile: width < 640,
        isDesktop: width >= 1340,
        width
    }
} 

export default useResponsive;
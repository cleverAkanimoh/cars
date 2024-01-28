import React from 'react';

export default function useResize() {

    const [pageWidth, setPageWidth] = React.useState(0)

    React.useEffect(() => {
        setPageWidth(window.innerWidth)
        window.onresize = () => setPageWidth(window.innerWidth)

        return window.removeEventListener("resize", () => setPageWidth(window.innerWidth))
    }, [pageWidth])
    
    return pageWidth
}
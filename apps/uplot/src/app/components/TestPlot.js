import React, { useEffect, useRef } from 'react';
import uPlot from 'uplot';

const TestPlot = (props) => {
    const plotRef = useRef(); 
    
    useEffect(()=> {
        new uPlot(props.options, props.data, plotRef.current);
    }, [props]);

    return (
        <div>
            <div ref={plotRef} />
        </div>
    )
};

export default TestPlot; 
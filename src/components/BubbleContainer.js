import React, {useMemo, useState } from 'react';
import { bubbleDetails } from '../utils/bubbleDetails';
import "./BubbleContainer.css"

function BubbleContainer({interest,SelectInterest}) {
    const cachedValue = useMemo(()=>bubbleDetails(), ["abc"])
    const [isBubbleClicked, setIsBubbleClicked] = useState(false);

    const handleClick = () => {
        SelectInterest(interest)
        setIsBubbleClicked(!isBubbleClicked); 
    }

    
    return (
        <div onClick={handleClick} className='bubble' id={isBubbleClicked && 'scale-bubble'} style={cachedValue} >
        {interest} </div>
    );
}

export default BubbleContainer;
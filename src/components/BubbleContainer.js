import React, { useEffect, useState } from 'react';
import { bubbleDetails } from '../utils/bubbleDetails';
import "./BubbleContainer.css"

function BubbleContainer({interest,SelectInterest}) {
    const styles = bubbleDetails();
    const [isBubbleClicked, setIsBubbleClicked] = useState(false);

    const handleClick = () => {
        SelectInterest(interest)
        setIsBubbleClicked(!isBubbleClicked); 
    }

    
    return (
        <div onClick={handleClick} className='bubble' id={isBubbleClicked && 'scale-bubble'} style={styles} >
        {interest} </div>
    );
}

export default BubbleContainer;
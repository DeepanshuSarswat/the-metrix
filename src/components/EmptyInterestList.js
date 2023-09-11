import React from 'react';
import { Link } from 'react-router-dom';
import "./EmptyInterestList.css"

function EmptyInterestList(props) {
    return (
        <div className='EmptyInterestList'>
            <>
            <h2>Oh!</h2>
            <p>List is Empty  </p>
            <p>  <Link to="/">Go to Home Page</Link></p>
            </>
        </div>
    );
}

export default EmptyInterestList;
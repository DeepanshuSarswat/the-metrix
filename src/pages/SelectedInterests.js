import React, { useEffect, useState } from 'react';
import { getData } from '../utils/dataBase';
import "./SelectedInterest.css"
import EmptyInterestList from '../components/EmptyInterestList';

function SelectedInterests() {
    const [selecetInterest, setSelecetInterest]  = useState();

    useEffect(()=>{
        setSelecetInterest(getData("selectedItems"));

    },[selecetInterest]);
 

    return (
        <div className='Selected-Interests'>
        <h1 className='title' id='selected-itm'>Selected Interests</h1>

        {
            selecetInterest != undefined 
            
            ? selecetInterest?.map((data)=>{
                return <p className='interest'>{data}</p>
            })
            :

            <EmptyInterestList />
        }
        </div>
    );
}

export default SelectedInterests;
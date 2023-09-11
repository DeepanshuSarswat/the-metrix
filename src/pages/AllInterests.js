import React, { useEffect, useState } from 'react';
import "./AllInterests.css"
import BubbleContainer from '../components/BubbleContainer';
import { INTERESTS_LIST } from '../utils/constainsts';
import { setData } from '../utils/dataBase';
import { useNavigate } from 'react-router-dom';
const AllInterests = () => {

    const navigate = useNavigate()
    const [selectedItems, setSelectedItems] = useState([]);

    const SelectInterest = (interest) => {

        const isSelected = selectedItems.includes(interest);

        if (isSelected) {
            // If it's selected, remove it from the array
            setSelectedItems(selectedItems.filter(selectedItem => selectedItem !== interest));
        }

        else {
            // If it's not selected, add it to the array
            setSelectedItems([...selectedItems, interest]);
          }
    }

    const handleConfirmInterest = () => {
        setData('selectedItems',selectedItems);
        navigate("/Seleceted-Interests")
       
    }

    useEffect(()=>{
        localStorage.clear();
    },[])

    return (
        <div className='container'>
            <header>
                <h2 className='title'>Choose three or of your favorites</h2>
            </header>
           
            <section>
                    <p className='text-info'>Tap once on the artists you like, or twice on the ones you love. Press and hold the ones you don't</p>
            </section>

            <div className='bubble-container'>
                {
                    INTERESTS_LIST.map((interest) => <BubbleContainer interest={interest} key={interest}

                    SelectInterest={SelectInterest}
                     />)  
                }
             
            </div>

            <button className='confirm-interest-btn'
                disabled = {selectedItems.length >=3 ? false : true}
                onClick={handleConfirmInterest}
                
                 id={selectedItems.length >=3 && 'confirm-interest-id-btn'}>Confirm Interests
            </button>

            <div className='alert'>Select atleast 3 artists</div>      
        
           
        </div>
    );
};

export default AllInterests;
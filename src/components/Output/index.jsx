import React, { useState } from 'react';
import Modal from '../Modal/Index';
import './output.css'

const Output = ({ characters }) => {
    console.log(characters)
    const [isVisible, SetIsVisible] = useState(false)
    const [currentPerson, setCurrentPerson] = useState(null)
    const showModal = (id) => {
        SetIsVisible(true)
        setCurrentPerson(id)
    }
    const hideModal = (e) => {
        if (e.target.className == 'modal' || e.target.className == 'close') {
            SetIsVisible(false)
        }
    }
    return (
        <div className='output'>
            {
                characters.map(el => (

                    <div key={el.id} className='card'>
                        <img src={el.image} alt="pictures" />
                        <h2>{el.name}</h2>
                        <button onClick={() => showModal(el.id)}>More...</button>
                        {isVisible && currentPerson == el.id ? <Modal data={el} hideModal={hideModal} /> : null}
                    </div>
                ))
            }

        </div>
    );
};

export default Output;
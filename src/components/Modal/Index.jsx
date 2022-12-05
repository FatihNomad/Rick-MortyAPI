import React from 'react';
import './Modal.css'


const Modal = ({ data, hideModal }) => {
    return (
        <div className='modal' onClick={hideModal}>
            <div className='modal_container'>
                <div className='close' onClick={hideModal}>X</div>
                <div className='info'>
                    <img src={data.image} alt="photo" />
                    <h2>{data.name}</h2>
                    <p>Gender: {data.gender}</p>
                    <p>Species: {data.species}</p>
                    <p>Status: {data.status}</p>
                </div>
            </div>

        </div>
    );
};

export default Modal;
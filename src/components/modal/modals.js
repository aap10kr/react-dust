import React, { useState } from 'react'
import Modal from 'react-modal';
import './modals.css';

Modal.setAppElement('#root')
const Modals = () => {
    
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return(
        <>
            <div className='w-full flex justify-end'>
                <button 
                    onClick={()=> setModalIsOpen(true)}
                    className="px-4 py-2 rounded shadow-md bg-green-600 text-white"
                >
                자세히 보기
                </button>
            </div>
            <Modal isOpen={modalIsOpen} className="modal">
                <section className='w-3/6 h-4/6 bg-white'>
                    <div className='h-5/6'>
                        This is Modal content
                    </div>
                    <button className='h-1/6' onClick={()=> setModalIsOpen(false)}>닫기</button>
                </section>
            </Modal>
        </>
    )
}

export default Modals
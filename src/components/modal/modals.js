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
                <section className='w-3/6 h-4/6 pt-8 bg-white'>
                    <div className='h-5/6 overflow-y-auto'>
                        <img src='../../../imgs/modal_img1.png' alt='modal-img'/>
                        <img src='../../../imgs/modal_img2.png' alt='modal-img' className='pt-10'/>
                        <img src='../../../imgs/modal_img3.png' alt='modal-img' className='pt-10'/>
                    </div>
                    <div className='w-full flex justify-center items-center h-1/6'>
                        <button className='px-6 py-2 rounded shadow-md bg-green-600 text-white' onClick={()=> setModalIsOpen(false)}>확인</button>
                    </div>
                </section>
            </Modal>
        </>
    )
}

export default Modals
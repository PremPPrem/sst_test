import React from 'react'
import { BsCheckCircle } from  "react-icons/bs";
import '../styles/Modal.scss'

function Modal({closeModal}) {
  return (
    <div className='modal'>
        <div className="modal_head">
            <div className="modal_content">
                <button onClick={()=>{closeModal(false)}}>X</button>
                <div className="modal_icon">
                <BsCheckCircle  />
                </div>
                <div className="modal_title">
                <p>Register Success</p>
            </div>
            </div>
      
        </div>
    </div>
  )
}

export default Modal
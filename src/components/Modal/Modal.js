import { AiOutlineClose } from 'react-icons/ai';
import './Modal.css';

function Modal({ showModal }){
    return(
        <div className='modal-background'>
            <div className='modal-container'>
                <button onClick={() => showModal(false)}> 
                    <AiOutlineClose className='close-icon'/> 
                </button>
                <h1>This is a Modal</h1>
            </div>
        </div>
    )
}

export default Modal;
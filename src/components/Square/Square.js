import { useState } from 'react';
import Modal from "../Modal/Modal";
import "./Square.css";

function Square(props){
    const [showingModal, setShowingModal] = useState(false);

    return (
        <div className="square">
            <h2>{ props.children }</h2>
            <button onClick={() => setShowingModal(true)}>Saiba mais</button>
            {showingModal ? <Modal showModal={setShowingModal}/> : null}
        </div>
    )
}

export default Square;
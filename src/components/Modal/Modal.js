import { createPortal } from "react-dom";
import "./modalStyles.css";
import { useEffect } from "react";

const portal = document.querySelector('#portal');

const Modal = ({ onClose, children }) => {

    useEffect(()=>{
        const closeOnEscapeKey = e => e.key === "Escape" ? onClose() : null;
            window.addEventListener("keydown", closeOnEscapeKey);
        return()=>{
            window.removeEventListener("keydown", closeOnEscapeKey);
        };
    },[onClose]);


  const handleBackdropClick = e => {
    if(e.currentTarget === e.target){
        onClose();
    }
};
const handleClose = () =>{
    onClose();
}

  return createPortal(
        <div className="modal" onClick={handleBackdropClick}>
            <div className="modal-content">
            <button type="button" onClick={handleClose}>X</button>
                {children}
            </div>
        </div>, portal
  );
}
export default Modal;
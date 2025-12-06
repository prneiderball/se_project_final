import React from "react";
import "./SuccessModel.css";
import CloseIcon from "../../assets/closeicon.svg";

function SuccessModel({ isOpen, onClose, openModal }) {
  if (!isOpen) return null;

  return (
    <div className="modal modal--visible">
      <div className="modal__content">
        <button onClick={onClose} type="button" className="modal__close">
          <img src={CloseIcon} alt="Close icon" />
        </button>
        <p>Registration completed successfully</p>
        <button onClick={openModal}>Go to Sign In</button>
      </div>
    </div>
  );
}

export default SuccessModel;

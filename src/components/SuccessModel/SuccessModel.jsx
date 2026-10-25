import React from "react";
import "./SuccessModel.css";
import CloseIcon from "../../assets/closeicon.svg";

function SuccessModel({ isOpen, onClose, openModal }) {
  if (!isOpen) return null;

  return (
    <div className="modal modal--visible">
      <div className="modal__content modal__content_type_success">
        <button
          onClick={onClose}
          type="button"
          className="modal__close"
        >
          <img src={CloseIcon} alt="Close icon" />
        </button>

        <h2 className="modal__title modal__title_type_success">
          Registration successfully completed!
        </h2>

        <button
          type="button"
          className="modal__redirect"
          onClick={() => openModal("login")}
        >
          Sign in
        </button>
      </div>
    </div>
  );
}

export default SuccessModel;

import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import React from "react";

function LoginModal({ isOpen, onClose, openModal, onSubmit }) {
  return (
    <ModalWithForm
      title="Sign in"
      buttonText="Sign in"
      isOpen={isOpen}
      closeActiveModal={onClose}
      onSubmit={onSubmit}
    >

      <label className="modal__label">
        Email
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          className="modal__input"
          required
        />
      </label>

      <label className="modal__label">
        Password
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          className="modal__input"
          required
        />
      </label>

      <p className="modal__switch-text">
        or{" "}
        <button
          type="button"
          className="modal__switch-button"
          onClick={() => openModal("register")}
        >
          Sign up
        </button>
      </p>

    </ModalWithForm>
  );
}

export default LoginModal;

import React, { useEffect } from "react";
import "./ModalWithForm.css";
import CloseIcon from "../../assets/closeicon.svg";

function ModalWithForm({
  title,
  children,
  buttonText,
  isOpen,
  closeActiveModal,
  onSubmit,
}) {
  // Close on ESC
  useEffect(() => {
    function handleEsc(e) {
      if (e.key === "Escape") {
        closeActiveModal();
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
    }
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, closeActiveModal]);

  // Close when clicking backdrop
  function handleBackdropClick(e) {
    if (e.target.classList.contains("modal")) {
      closeActiveModal();
    }
  }

  if (!isOpen) return null;

  return (
    <div className="modal modal--visible" onClick={handleBackdropClick}>
      <div className="modal__content">
        <button
          onClick={closeActiveModal}
          type="button"
          className="modal__close"
        >
          <img src={CloseIcon} alt="Close icon" />
        </button>

        <h2 className="modal__title">{title}</h2>

        <form className="modal__form" onSubmit={onSubmit}>
          {children}

          {buttonText && (
            <button type="submit" className="modal__submit">
              {buttonText}
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;

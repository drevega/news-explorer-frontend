import React, { useEffect } from "react";
import "./Modal.css";
import closeIcon from "../../assets/close-icon.svg";

// Modal component with overlay and close functionality
function Modal({ isOpen, onClose, children }) {
  // useEffect to handle "Escape" key press
  useEffect(() => {
    if (!isOpen) return;

    const handleEscapeKey = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);

    // Cleanup function to remove event listener
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen, onClose]);

  // Handler for overlay click
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Don't render the modal if it's not open
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal" onClick={handleOverlayClick}>
      <div className="modal__container">
        <button className="modal__close-btn" type="button" onClick={onClose}>
          <img src={closeIcon} alt="close icon" />
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;

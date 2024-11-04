import PropTypes from "prop-types";
import "./Modal.css";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { CloseIcon } from "../../icons";

const Modal = (props) => {
  const { open, onClose, title, children } = props;
  const [isModalOpen, setIsModalOpen] = useState(open);

  const modalRef = useRef(null);

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      handleCloseModal();
    }
  };

  const handleCloseModal = () => {
    if (onClose) {
      onClose();
    }
    setIsModalOpen(false);
  };

  useEffect(() => {
    setIsModalOpen(open);
  }, [open]);

  useEffect(() => {
    const modalElement = modalRef.current;
    if (modalElement) {
      if (isModalOpen) {
        modalElement.showModal();
      } else {
        modalElement.close();
      }
    }
  }, [isModalOpen]);

  return (
    <>
      {isModalOpen && (
        <dialog
          ref={modalRef}
          className="modal-container"
          onKeyDown={handleKeyDown}
        >
          <div className="modal-header">
            <h6 className="modal-title">{title}</h6>
            <button
              className="icon-btn modal-close-btn"
              onClick={handleCloseModal}
            >
              {CloseIcon}
            </button>
          </div>
          <div className="modal-body">{children}</div>
        </dialog>
      )}
    </>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node,
};

export default Modal;

import PropTypes from "prop-types";
import "./Modal.css";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

const CloseIcon = (
  <svg
    width="32"
    height="33"
    viewBox="0 0 32 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.8538 20.6465C20.9002 20.693 20.9371 20.7481 20.9622 20.8088C20.9874 20.8695 21.0003 20.9346 21.0003 21.0003C21.0003 21.066 20.9874 21.131 20.9622 21.1917C20.9371 21.2524 20.9002 21.3076 20.8538 21.354C20.8073 21.4005 20.7522 21.4373 20.6915 21.4625C20.6308 21.4876 20.5657 21.5006 20.5 21.5006C20.4343 21.5006 20.3693 21.4876 20.3086 21.4625C20.2479 21.4373 20.1927 21.4005 20.1463 21.354L16 17.2072L11.8538 21.354C11.76 21.4478 11.6327 21.5006 11.5 21.5006C11.3674 21.5006 11.2401 21.4478 11.1463 21.354C11.0525 21.2602 10.9998 21.133 10.9998 21.0003C10.9998 20.8676 11.0525 20.7403 11.1463 20.6465L15.2932 16.5003L11.1463 12.354C11.0525 12.2602 10.9998 12.133 10.9998 12.0003C10.9998 11.8676 11.0525 11.7403 11.1463 11.6465C11.2401 11.5527 11.3674 11.5 11.5 11.5C11.6327 11.5 11.76 11.5527 11.8538 11.6465L16 15.7934L20.1463 11.6465C20.2401 11.5527 20.3674 11.5 20.5 11.5C20.6327 11.5 20.76 11.5527 20.8538 11.6465C20.9476 11.7403 21.0003 11.8676 21.0003 12.0003C21.0003 12.133 20.9476 12.2602 20.8538 12.354L16.7069 16.5003L20.8538 20.6465Z"
      fill="#00591B"
    />
  </svg>
);

const Modal = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(props.open);

  const modalRef = useRef(null);

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      handleCloseModal();
    }
  };

  const handleCloseModal = () => {
    if (props?.onClose) {
      props.onClose();
    }
    setIsModalOpen(false);
  };

  useEffect(() => {
    setIsModalOpen(props.open);
  }, [props.open]);

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
            <h6 className="modal-title">{props?.title}</h6>
            <button className="modal-close-btn" onClick={handleCloseModal}>
              {CloseIcon}
            </button>
          </div>
          <div className="modal-body">{props?.children}</div>
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

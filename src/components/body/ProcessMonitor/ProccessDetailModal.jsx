import { useState } from "react";
import PropTypes from "prop-types";
import { DetailIcon } from "../../../common/icons";
import Modal from "../../../common/components/Modal";

const ProccessDetailModal = (props) => {
  const { openModal, onClose, data } = props;

  const [isIssueDetailOpen, setIsIssueDetailOpen] = useState(false);
  return (
    <Modal
      open={openModal}
      onClose={() => onClose()}
      title={"Detalle de proceso"}
    >
      <div className="modal-complete-procces">
        <div className="modal-row">
          <div className="modal-input-group">
            <p htmlFor="Identificador">Identificador</p>
            <span>{data?.identificador}</span>
          </div>
          <div className="modal-input-group">
            <p htmlFor="Identificador">Nombre de proceso</p>
            <span>{data?.nombre}</span>
          </div>
        </div>
        <div className="modal-row">
          <div className="modal-input-group">
            <p htmlFor="Identificador">Tipo de proceso</p>
            <div>
              <div
                className={`modal-badge badge ${
                  data?.tipo.charAt(0).toLowerCase() === "c"
                    ? "modal-communication communication"
                    : "monitor"
                }`}
              >
                {data?.tipo.charAt(0).toLowerCase() === "c"
                  ? "Consola"
                  : "Masivo"}
              </div>
            </div>
          </div>
          <div className="modal-input-group">
            <p htmlFor="Identificador">Identificador de la sesión (SID)</p>
            <span>{456789}</span>
          </div>
        </div>
        <div className="modal-row">
          <div className="modal-input-group">
            <p htmlFor="Identificador">Usuario que ejecutó el proceso</p>
            <span>{data?.usuario}</span>
          </div>
          <div className="modal-input-group">
            <p htmlFor="Identificador">Fecha de inicio</p>
            <span>{data?.fechaDeInicio}</span>
          </div>
        </div>
        <div className="modal-row">
          <div className="modal-input-group">
            <p htmlFor="Identificador">Fecha de finalización</p>
            <span>{data?.fechaFin}</span>
          </div>
          <div className="modal-input-group">
            <p htmlFor="Identificador">Pasos</p>
            <div style={{ display: "flex", gap: 8 }}>
              <span>1/4</span>
              <button
                className="icon-btn"
                onClick={() => setIsIssueDetailOpen((state) => !state)}
              >
                {DetailIcon}
              </button>
            </div>
          </div>
        </div>
        <div className="modal-row">
          <div className="modal-input-group">
            <p htmlFor="Identificador">Cantidad total</p>
            <span>4</span>
          </div>
          <div className="modal-input-group">
            <p htmlFor="Identificador">Cantidad procesada</p>
            <span>4</span>
          </div>
        </div>
        <div className="modal-row">
          <div className="modal-input-group">
            <p htmlFor="Identificador">Tipo de identificador</p>
            <span>Id_pers</span>
          </div>
          <div className="modal-input-group">
            <p htmlFor="Identificador">Registro actual</p>
            <span>1234510</span>
          </div>
        </div>
        <div className="modal-row">
          <div className="modal-input-group">
            <p htmlFor="Identificador">Avance del proceso</p>
            <span>45%</span>
          </div>
          <div className="modal-input-group">
            <p htmlFor="Identificador">Estado</p>
            <div
              className={`modal-badge ${
                data?.estado.charAt(0).toLowerCase() === "f"
                  ? "completed-badge"
                  : "pending-badge"
              }`}
            >
              {data?.estado}
            </div>
          </div>
        </div>
        <div className="modal-input-group">
          <p htmlFor="Identificador">Presenta incidentes</p>
          <span>No</span>
        </div>
        {isIssueDetailOpen && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingTop: "1rem",
            }}
          >
            <span>Descripción del incidente</span>
            <div style={{ maxWidth: "300px" }}>
              <p style={{ marginTop: "0.5rem" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};

ProccessDetailModal.propTypes = {
  openModal: PropTypes.bool,
  onClose: PropTypes.func,
  data: PropTypes.object,
};

export default ProccessDetailModal;

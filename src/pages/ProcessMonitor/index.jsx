import { useState } from "react";
import Modal from "../../components/Modal";
import "./ProccessMonitor.css";
import { ProccessMonitorMockData } from "../../mocks/process-monitor-mock-data";
import MonitorGridRow from "./MonitorGridRow";
import "./MonitorGrid.css";

const ProccessMonitor = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="proccess-monitor-container">
      <div>
        <h3>Monitor de procesos</h3>
      </div>
      <div className="monitor-scroll-table">
        <table className="monitor-table">
          <thead>
            <tr>
              <th>Identificador</th>
              <th>Nombre</th>
              <th>Tipo</th>
              <th>Usuario</th>
              <th>Fecha de Inicio</th>
              <th>Fecha fin</th>
              <th>Estado</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {ProccessMonitorMockData.map((row) => (
              <MonitorGridRow key={row.id} data={row} />
            ))}
          </tbody>
        </table>
      </div>
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
};

export default ProccessMonitor;

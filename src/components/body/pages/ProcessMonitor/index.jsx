import { useEffect, useState } from "react";
import "./ProccessMonitor.css";
import MonitorGridRow from "./MonitorGridRow";
import "./MonitorGrid.css";
import Modal from "../../../../common/components/Modal";
import { ProccessMonitorMockData } from "../../../../common/mocks/process-monitor-mock-data";

const ProccessMonitor = () => {
  const [openModal, setOpenModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [proccessData, setProccessData] = useState([]);

  useEffect(() => {
    const loadProccessData = async () => {
      try {
        const data = await Promise.resolve(ProccessMonitorMockData);
        setProccessData(data);
      } catch (error) {
        setErrorMessage(`upps!!, something has happened. ${error?.message}`);
      }
    };
    loadProccessData();
  }, []);

  return (
    <div className="proccess-monitor-container">
      <div>
        <span> {errorMessage}</span>
      </div>
      <div>
        <h3>Monitor de procesos</h3>
      </div>
      <div className="monitor-scroll-table">
        <table className="monitor-table">
          <thead>
            <tr>
              <th style={{ width: "150px" }}>Identificador</th>
              <th>Nombre</th>
              <th style={{ width: "92px" }}>Tipo</th>
              <th>Usuario</th>
              <th>Fecha de Inicio</th>
              <th>Fecha fin</th>
              <th>Estado</th>
              <th style={{ width: "70px" }}>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {proccessData.map((row) => (
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

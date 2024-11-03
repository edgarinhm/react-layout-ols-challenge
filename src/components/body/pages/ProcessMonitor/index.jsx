import { useEffect, useMemo, useState } from "react";
import "./ProccessMonitor.css";
import MonitorGridRow from "./MonitorGridRow";
import "./MonitorGrid.css";
import Modal from "../../../../common/components/Modal";
import { ProccessMonitorMockData } from "../../../../common/mocks/process-monitor-mock-data";
import PaginationControls from "../../../../common/components/PaginationControls";

const ProccessMonitor = () => {
  const [openModal, setOpenModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [proccessData, setProccessData] = useState([]);

  const [pageSize, setPageSize] = useState(10);

  const totalPages = useMemo(
    () => Math.ceil(proccessData.length / pageSize),
    [proccessData.length, pageSize]
  );

  const [currentPage, setCurrentPage] = useState(1);
  const currentSlice = (currentPage - 1) * pageSize;

  const pagedProccessData = proccessData.slice(
    currentSlice,
    currentSlice + pageSize
  );

  useEffect(() => {
    const loadProccessData = async () => {
      try {
        const data = await Promise.resolve(ProccessMonitorMockData);
        setProccessData(data);
      } catch (error) {
        setErrorMessage(`Oops, something went wrong!!. ${error?.message}`);
      }
    };
    loadProccessData();
  }, []);

  return (
    <div className="proccess-monitor-container">
      <div>
        <h3>Monitor de procesos</h3>
      </div>
      {errorMessage && (
        <div>
          <span> {errorMessage}</span>
        </div>
      )}
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
            {pagedProccessData.map((row) => (
              <MonitorGridRow key={row.id} data={row} />
            ))}
          </tbody>
        </table>
      </div>
      <PaginationControls
        currentPage={currentPage}
        totalRecords={proccessData.length}
        totalPages={totalPages}
        recordsPerPage={[10, 25, 50, 100]}
        setPageNumber={setCurrentPage}
        rowsPerPage={pageSize}
        setRowsPerPage={setPageSize}
      />
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
};

export default ProccessMonitor;

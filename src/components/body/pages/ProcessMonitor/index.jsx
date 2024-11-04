import { useEffect, useMemo, useState } from "react";
import "./ProccessMonitor.css";
import MonitorGridRow from "./MonitorGridRow";
import "./MonitorGrid.css";
import { ProccessMonitorMockData } from "../../../../common/mocks/process-monitor-mock-data";
import PaginationControls from "../../../../common/components/PaginationControls";
import Popover from "../../../../common/components/Popover";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  MoreActionIcon,
  SortIcon,
} from "../../../../common/Icons";
import MenuActionRow from "./MenuActionRow";
import ProccessDetailModal from "./ProccessDetailModal";

const ProccessMonitor = () => {
  const [openModal, setOpenModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [proccessData, setProccessData] = useState([]);

  const [currentRow, setCurrentRow] = useState();

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

  const [sortOrder, setSortOrder] = useState("asc");
  const [sortColumn, setSortColumn] = useState();

  const sortedData = sortColumn
    ? [...pagedProccessData].sort((a, b) => {
        if (a[sortColumn] === null) return 1;
        if (b[sortColumn] === null) return -1;
        if (a[sortColumn] === null && b[sortColumn] === null) return 0;
        return (
          a[sortColumn]
            .toString()
            .localeCompare(b[sortColumn].toString(), "es", {
              numeric: true,
            }) * (sortOrder === "asc" ? 1 : -1)
        );
      })
    : pagedProccessData;

  const handleSorting = (column, menuOrder) => {
    const order = sortColumn === column && sortOrder === "asc" ? "desc" : "asc";
    setSortColumn(column);
    setSortOrder(menuOrder ?? order);
  };

  const GetSortIcon = (column) => {
    return sortColumn === column
      ? sortOrder === "asc"
        ? ArrowUpIcon
        : ArrowDownIcon
      : SortIcon;
  };

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
              <th style={{ width: "150px" }}>
                <span>Identificador</span>
                <button
                  className="icon-btn"
                  onClick={() => {
                    handleSorting("identificador");
                  }}
                >
                  {GetSortIcon("identificador")}
                </button>
                <Popover
                  trigger={
                    <button className="icon-btn">{MoreActionIcon}</button>
                  }
                  content={
                    <MenuActionRow
                      column={"identificador"}
                      setSortColumn={(value) => handleSorting(value)}
                    />
                  }
                  position="bottomCenter"
                  triggerType="click"
                  offset={10}
                />
              </th>
              <th>
                <div>Nombre</div>
                <button
                  className="icon-btn"
                  onClick={() => handleSorting("nombre")}
                >
                  {GetSortIcon("nombre")}
                </button>
                <Popover
                  trigger={
                    <button className="icon-btn">{MoreActionIcon}</button>
                  }
                  content={
                    <MenuActionRow
                      column={"nombre"}
                      setSortColumn={(value) => handleSorting(value)}
                    />
                  }
                  position="bottomCenter"
                  triggerType="click"
                  offset={10}
                />
              </th>
              <th style={{ width: "92px" }}>
                <span>Tipo</span>
                <button
                  className="icon-btn"
                  onClick={() => handleSorting("tipo")}
                >
                  {GetSortIcon("tipo")}
                </button>
                <Popover
                  trigger={
                    <button className="icon-btn">{MoreActionIcon}</button>
                  }
                  content={
                    <MenuActionRow
                      column={"tipo"}
                      setSortColumn={(value) => handleSorting(value)}
                    />
                  }
                  position="bottomCenter"
                  triggerType="click"
                  offset={10}
                />
              </th>
              <th>
                <span>Usuario</span>
                <button
                  className="icon-btn"
                  onClick={() => handleSorting("usuario")}
                >
                  {GetSortIcon("usuario")}
                </button>
                <Popover
                  trigger={
                    <button className="icon-btn">{MoreActionIcon}</button>
                  }
                  content={
                    <MenuActionRow
                      column={"usuario"}
                      setSortColumn={(value) => handleSorting(value)}
                    />
                  }
                  position="bottomCenter"
                  triggerType="click"
                  offset={10}
                />
              </th>
              <th>
                <span>Fecha de Inicio</span>
                <button
                  className="icon-btn"
                  onClick={() => handleSorting("fechaDeInicio")}
                >
                  {GetSortIcon("fechaDeInicio")}
                </button>
                <Popover
                  trigger={
                    <button className="icon-btn">{MoreActionIcon}</button>
                  }
                  content={
                    <MenuActionRow
                      column={"fechaDeInicio"}
                      setSortColumn={(value) => handleSorting(value)}
                    />
                  }
                  position="bottomCenter"
                  triggerType="click"
                  offset={10}
                />
              </th>
              <th>
                <span>Fecha fin</span>
                <button
                  className="icon-btn"
                  onClick={() => handleSorting("fechaFin")}
                >
                  {GetSortIcon("fechaFin")}
                </button>
                <Popover
                  trigger={
                    <button className="icon-btn">{MoreActionIcon}</button>
                  }
                  content={
                    <MenuActionRow
                      column={"fechaFin"}
                      setSortColumn={(value) => handleSorting(value)}
                    />
                  }
                  position="bottomCenter"
                  triggerType="click"
                  offset={10}
                />
              </th>
              <th>
                <span>Estado</span>
                <button
                  className="icon-btn"
                  onClick={() => handleSorting("estado")}
                >
                  {GetSortIcon("estado")}
                </button>
                <Popover
                  trigger={
                    <button className="icon-btn">{MoreActionIcon}</button>
                  }
                  content={
                    <MenuActionRow
                      column={"estado"}
                      setSortColumn={(value) => handleSorting(value)}
                    />
                  }
                  position="bottomCenter"
                  triggerType="click"
                  offset={10}
                />
              </th>
              <th style={{ width: "70px" }}>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((row) => (
              <MonitorGridRow
                key={row.id}
                data={row}
                setOpenModal={() => setOpenModal(true)}
                setCurrentRow={(value) => setCurrentRow(value)}
              />
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
      <ProccessDetailModal
        openModal={openModal}
        onClose={() => setOpenModal(false)}
        data={currentRow}
      />
    </div>
  );
};

export default ProccessMonitor;

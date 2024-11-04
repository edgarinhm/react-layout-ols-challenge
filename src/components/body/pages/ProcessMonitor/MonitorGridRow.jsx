import PropTypes from "prop-types";
import { DetailIcon, DownloadIcon, EmailIcon } from "../../../../common/Icons";

const MonitorGridRow = (props) => {
  const { setOpenModal, data, setCurrentRow } = props;

  return (
    <tr>
      <td style={{ width: "150px" }}>{data.identificador}</td>
      <td>{data.nombre}</td>
      <td style={{ width: "92px" }}>
        <div
          className={`badge ${data.tipo === "C" ? "communication" : "monitor"}`}
        >
          {data.tipo}
        </div>
      </td>
      <td>{data.usuario}</td>
      <td>{data.fechaDeInicio}</td>
      <td>{data.fechaFin}</td>
      <td>
        <div
          className={`${
            data.estado.charAt(0).toLowerCase() === "f"
              ? "completed-badge"
              : "pending-badge"
          }`}
        >
          {data.estado}
        </div>
      </td>
      <td style={{ width: "70px" }}>
        <button
          className="icon-btn icons"
          onClick={() => {
            setCurrentRow(data);
            setOpenModal(true);
          }}
        >
          {DetailIcon}
        </button>
        <button className="icon-btn icons" onClick={() => setCurrentRow(data)}>
          {EmailIcon}
        </button>

        <button className="icon-btn icons" onClick={() => setCurrentRow(data)}>
          {DownloadIcon}
        </button>
      </td>
    </tr>
  );
};

MonitorGridRow.propTypes = {
  setOpenModal: PropTypes.func,
  data: PropTypes.object,
  setCurrentRow: PropTypes.func,
};

export default MonitorGridRow;

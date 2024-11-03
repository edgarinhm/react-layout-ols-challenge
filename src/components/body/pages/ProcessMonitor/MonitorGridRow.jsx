import PropTypes from "prop-types";

const DetailIcon = (
  <svg fill="currentColor" viewBox="0 0 16 16" height="1em" width="1em">
    <path
      fill="#00591B"
      d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 011.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0114.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 011.172 8z"
    />
    <path
      fill="#00591B"
      d="M8 5.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM4.5 8a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z"
    />
  </svg>
);

const EmailIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
    <path
      fill="#00591B"
      d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6m-2 0l-8 5-8-5h16m0 12H4V8l8 5 8-5v10z"
    />
  </svg>
);

const DownloadIcon = (
  <svg fill="none" viewBox="0 0 24 24" height="1em" width="1em">
    <path
      fill="#00591B"
      d="M11 5a1 1 0 112 0v7.158l3.243-3.243 1.414 1.414L12 15.986 6.343 10.33l1.414-1.414L11 12.158V5z"
    />
    <path
      fill="#00591B"
      d="M4 14h2v4h12v-4h2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4z"
    />
  </svg>
);

const MonitorGridRow = (props) => {
  const { setOpenModal, data } = props;

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
        <button className="icon-btn icons" onClick={() => setOpenModal(true)}>
          {DetailIcon}
        </button>

        <button className="icon-btn icons" onClick={() => ""}>
          {EmailIcon}
        </button>

        <button className="icon-btn icons" onClick={() => ""}>
          {DownloadIcon}
        </button>
      </td>
    </tr>
  );
};

MonitorGridRow.propTypes = {
  setOpenModal: PropTypes.func,
  data: PropTypes.object,
};

export default MonitorGridRow;

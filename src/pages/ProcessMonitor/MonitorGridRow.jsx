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

const MonitorGridRow = (props) => {
  const { setOpenModal, data } = props;

  return (
    <tr>
      <td>{data.identificador}</td>
      <td>{data.nombre}</td>
      <td>{data.tipo}</td>
      <td>{data.usuario}</td>
      <td>{data.fechaDeInicio}</td>
      <td>{data.fechaFin}</td>
      <td>{data.estado}</td>
      <td>
        <button className="icon-btn icons" onClick={() => setOpenModal(true)}>
          {DetailIcon}
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

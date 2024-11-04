import PropTypes from "prop-types";
import "./MonitorGrid.css";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  ClearFilterIcon,
  ClearSortIcon,
  FilterIcon,
} from "../../../common/icons";

const MenuActionRow = (props) => {
  const { setSortColumn, column } = props;
  return (
    <div className="menu-action-container">
      <button
        className="icon-btn menu-action-row"
        onClick={() => setSortColumn()}
      >
        {ClearSortIcon}
        <div className="label-icon">Limpiar ordenamiento</div>
      </button>
      <button
        className="icon-btn menu-action-row"
        onClick={() => setSortColumn(column)}
      >
        {ArrowUpIcon}
        <div className="label-icon">Ordenar ascendente</div>
      </button>
      <button
        className="icon-btn menu-action-row"
        onClick={() => setSortColumn(column)}
      >
        {ArrowDownIcon}
        <div className="label-icon">Ordenar descendente</div>
      </button>
      <button className="icon-btn menu-action-row">
        {FilterIcon}
        <div className="label-icon">Filtrar</div>
      </button>
      <button className="icon-btn menu-action-row">
        {ClearFilterIcon}
        <div className="label-icon">Limpiar</div>
      </button>
    </div>
  );
};

MenuActionRow.propTypes = {
  setSortColumn: PropTypes.func,
  column: PropTypes.string,
};

export default MenuActionRow;

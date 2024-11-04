import PropTypes from "prop-types";
import "./PaginationControls.css";

const ArrowLeft = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.705 7.41L14.295 6L8.29498 12L14.295 18L15.705 16.59L11.125 12L15.705 7.41Z"
      fill="black"
      fillOpacity="0.56"
    />
  </svg>
);

const ArrowRight = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.70498 6L8.29498 7.41L12.875 12L8.29498 16.59L9.70498 18L15.705 12L9.70498 6Z"
      fill="black"
      fillOpacity="0.56"
    />
  </svg>
);

const PaginationControls = (props) => {
  const {
    totalRecords,
    recordsPerPage,
    currentPage,
    totalPages,
    setPageNumber,
    rowsPerPage,
    setRowsPerPage,
  } = props;

  return (
    <div className="pagination-control">
      <div className="rows-per-page-container">
        <span>Filas por página: </span>
        <select
          name="rows-per-page"
          id="rows-per-page"
          value={recordsPerPage[rowsPerPage]}
          onChange={(event) => {
            setRowsPerPage(recordsPerPage[Number(event.target.value)]);
          }}
        >
          {recordsPerPage.map((option, index) => (
            <option key={option} value={index}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="">
        {currentPage}-{totalPages}
        {" de "}
        {totalRecords}
      </div>

      <div className="navigation">
        <button
          className="icon-btn icons"
          disabled={currentPage === 1}
          onClick={() => setPageNumber(currentPage - 1)}
        >
          {ArrowLeft}
        </button>
        <button
          className="icon-btn icons"
          disabled={currentPage === totalPages}
          onClick={() => setPageNumber(currentPage + 1)}
        >
          {ArrowRight}
        </button>
      </div>
    </div>
  );
};

PaginationControls.propTypes = {
  totalRecords: PropTypes.number,
  recordsPerPage: PropTypes.array,
  totalPages: PropTypes.number,
  currentPage: PropTypes.number,
  setPageNumber: PropTypes.func,
  setRowsPerPage: PropTypes.func,
  rowsPerPage: PropTypes.number,
};

export default PaginationControls;

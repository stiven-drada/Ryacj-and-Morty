import "../Pagination/Pagination.css";
const Pagination = ({ pages, changePage, pageNumber }) => {
  return (
    <div className="container_buttons">
      <button
        className="button_back"
        onClick={() => changePage(pageNumber - 1)}
      >
        Atras
      </button>
      {pages.map((i) => (
        <button
          className="button_number"
          key={i}
          onClick={() => changePage(i)}
          style={{ color: pageNumber === i ? "red" : undefined }}
        >
          {i}
        </button>
      ))}
      <button
        className="button_next"
        onClick={() => changePage(pageNumber + 1)}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;

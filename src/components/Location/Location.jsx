import PropTypes from "prop-types";
import "./location.css";
const Location = ({ location }) => {
  return (
    <div className="container_location">
      <h2>{location.name}</h2>
      <ul>
        <li>
          <b>Tipo: </b>
          {location.type}
        </li>
        <li>
          <b>Dimensión: </b>
          {location.dimension}
        </li>
        <li>
          <b>Población: </b>
          {location.residents.length}
        </li>
      </ul>
    </div>
  );
};

Location.propTypes = {
  location: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    dimension: PropTypes.string.isRequired,
    residents: PropTypes.array.isRequired,
  }),
};

export default Location;

import PropTypes from "prop-types";
import ResidentCard from "../ResidentCard/ResidentCard";
import "./residentlist.css";

const ResidentList = ({ residents }) => {
  return (
    <>
      {!residents.length && <p>No hay residentes en esta ubicacion</p>}

      {Boolean(residents.length) && (
        <ul className="container_residentCard">
          {residents.map((residentUrl) => (
            <li key={residentUrl}>
              <ResidentCard url={residentUrl} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
ResidentList.prototype = {
  residents: PropTypes.array.isRequired,
};
export default ResidentList;

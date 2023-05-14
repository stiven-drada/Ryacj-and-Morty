import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getCharacterByUrl } from "../../services/getCharacterByUrl";
import "./residentCard.css";
const ResidentCard = ({ url }) => {
  const [resident, setResident] = useState(null);
  useEffect(() => {
    const loadResident = async () => {
      const resindentData = await getCharacterByUrl(url);
      setResident(resindentData);
    };
    loadResident();
  }, [url]);
  return (
    <main className="resident_card">
      {resident ? (
        <article>
          <div className="resident_card__img">
            <img src={resident.image} alt="" />
          </div>
          <div className="resident_card_info">
            <h3>{resident.name}</h3>
            <ul>
              <li>
                <b>Race: </b>
                <br />
                {resident.species}
              </li>
              <li>
                <b>Origin: </b>
                <br />
                {resident.origin.name}
              </li>
              <li>
                <b>Status: </b>
                <br />
                {resident.status}
              </li>
              <li>
                <b>Apparences: </b>
                <br />
                {resident.episode.length}
              </li>
            </ul>
          </div>
        </article>
      ) : (
        <p>loading...</p>
      )}
    </main>
  );
};

ResidentCard.prototype = {
  url: PropTypes.string.isRequired,
};
export default ResidentCard;

import Loader from "./components/Loader/Loader";
import Location from "./components/Location/Location";
import SearchForm from "./components/SearchForm/SearchForm";
import ResidentList from "./components/ResidentList/ResidentList";
import { getLocationById } from "./services/getLocationById";
import { getRandomNumber } from "./utils/getRandomNumber";
import { useEffect, useState } from "react";
import { usePagination } from "./hooks/usePagination";
import Pagination from "./components/Pagination/Pagination";

import "./App.css";

function App() {
  const [location, setLocation] = useState(null);
  const [quantityPerPage, setQuantityPerPage] = useState(12);

  const handlerSubmit = async (id) => {
    let locationInfo;
    if (!id) {
      const randomId = getRandomNumber(1, 126);
      locationInfo = await getLocationById(randomId);
    } else {
      locationInfo = await getLocationById(id);
    }

    setLocation(locationInfo);
  };

  useEffect(() => {
    const loadLocation = async () => {
      const randomId = getRandomNumber(1, 126);
      const locationInfo = await getLocationById(randomId);
      setLocation(locationInfo);
    };
    loadLocation();
  }, []);

  const { pageNumber, residentsSlice, pages, changePage } = usePagination(
    location ? location.residents : [],
    quantityPerPage
  );
  return (
    <main>
      <header>
        <h1>Rick and Morty</h1>
      </header>

      <article className="intro">
        <h2>¡Bienvenido a la Wiki de Rick y Morty!</h2>
        <p>
          Rick y Morty es una serie de televisión estadounidense de animación
          para adultos creada por Justin Roiland y Dan Harmon para Adult Swim.
          La serie sigue las aventuras de un científico alcohólico, Rick, y su
          fácilmente influenciable nieto, Morty, quienes pasan el tiempo entre
          la vida doméstica familiar y los viajes espaciales intergalácticos.
          Aquí podrás ver todos los personajes y aprender más de ellos.
        </p>
      </article>

      <section className="constainer_location" id="location">
        {location ? <Location location={location} /> : <Loader />}
      </section>

      <div className="container_form">
        <SearchForm onSubmit={handlerSubmit} />
      </div>
      <div className="container_pagination">
        {residentsSlice ? (
          <Pagination
            pages={pages}
            changePage={changePage}
            pageNumber={pageNumber}
          />
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <section className="container_residents">
        {residentsSlice ? (
          <ResidentList residents={residentsSlice} />
        ) : (
          <p>Loading residents...</p>
        )}
      </section>
      <button className="returnHome">
        <a onClick={(e) => e.preventDefault} href="#location">
          <img
            src="src\assets\icons\icons8-arriba-círculo-48.png"
            alt="arrow"
          />
        </a>
      </button>
    </main>
  );
}

export default App;

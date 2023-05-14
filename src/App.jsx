import Location from "./components/Location/Location";
import Loader from "./components/Loader/Loader";
import ResidentList from "./components/ResidentList/ResidentList";
import { getLocationById } from "./services/getLocationById";
import { getRandomNumber } from "./utils/getRandomNumber";
import { useEffect, useState } from "react";

import "./App.css";
import SearchForm from "./components/SearchForm/SearchForm";

function App() {
  const [location, setLocation] = useState(null);

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

  return (
    <main>
      <header>
        <h1>Ryacj and Morty</h1>
      </header>

      <section className="constainer_location">
        {location ? <Location location={location} /> : <Loader />}
      </section>

      <div className="container_form">
        <SearchForm onSubmit={handlerSubmit} />
      </div>

      <section className="container_residents">
        {location ? (
          <ResidentList residents={location.residents} />
        ) : (
          <p>Loading residents...</p>
        )}
      </section>
    </main>
  );
}

export default App;

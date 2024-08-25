import { useState } from "react";
import "./form.css";

const SearchForm = ({ onSubmit }) => {
  const [searchLocation, setSearchLocation] = useState("");
  const [errorSearchLocation, setErrorSearchLocation] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.value;

    if (newValue && isNaN(Number(newValue))) {
      setErrorSearchLocation("El ID solo deve  contener numeros");
    } else if (newValue && Number(newValue) < 1) {
      setErrorSearchLocation("El menor ID existente es 1");
    } else if (newValue && Number(newValue) > 126) {
      setErrorSearchLocation("El ID maximo exitente es 126");
    } else {
      setErrorSearchLocation("");
    }

    setSearchLocation(e.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (errorSearchLocation) return;
    onSubmit(searchLocation);
  };

  return (
    <form onSubmit={handlerSubmit} className="forLocation">
      <label htmlFor="idLocation">
        Escriba un ID entre 1 y 126 (cada ID es una ubicación) o presione el
        botón buscar para una ubicación aleatoria.
      </label>
      <br />
      <div>
        <input
          type="text"
          name="idLocation"
          id="idLocation"
          value={searchLocation}
          onChange={handleChange}
        />
        <button type="submit">Buscar</button>
      </div>
      <p style={{ color: "red" }}>{errorSearchLocation}</p>
    </form>
  );
};

export default SearchForm;

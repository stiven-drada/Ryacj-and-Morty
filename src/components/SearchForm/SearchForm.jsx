import { useState } from "react";
import "./form.css";

const SearchForm = ({ onSubmit }) => {
  const [searchLocation, setSearchLocation] = useState("");
  const [errorSearchLocation, setErrorSearchLocation] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.value;

    if (newValue && isNaN(Number(newValue))) {
      setErrorSearchLocation("El id solo deve  contener numeros");
    } else if (newValue && Number(newValue) < 1) {
      setErrorSearchLocation("El menor id existente es 1");
    } else if (newValue && Number(newValue) > 126) {
      setErrorSearchLocation("El id maximo exitente es 126");
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
    <form onSubmit={handlerSubmit}>
      <input
        type="text"
        name=""
        id=""
        value={searchLocation}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
      <p style={{ color: "red" }}>{errorSearchLocation}</p>
    </form>
  );
};

export default SearchForm;

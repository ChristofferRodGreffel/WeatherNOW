import { useState } from "react";

export default function SearchBar(props) {
  const [city, setCity] = useState("");

  const search = (e) => {
    e.preventDefault();
    props.search(city);
  };

  return (
    <form onSubmit={search} id="inputForm">
      <input onChange={(e) => setCity(e.target.value)} type="text" required={true} placeholder={props.placeholder} />
      <button type="submit">Søg</button>
    </form>
  );
}

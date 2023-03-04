import { NavLink } from "react-router-dom";

function Error() {
  return (
  <div>
  <header style={{ backgroundColor: "lightblue", padding: "10px" }}>
        <NavLink to="/">🏠</NavLink>
      </header>
    <h3>Error del servidor!!</h3>
    <p>(vuelva atras)</p>
  </div>
  )
}

export default Error;

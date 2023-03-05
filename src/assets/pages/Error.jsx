import { NavLink } from "react-router-dom";

function Error() {
  return (
  <div>
  <header style={{ backgroundColor: "rgb(0, 153, 255)", padding: "10px", textAlign: "center"  }}>
        <NavLink to="/">🏠</NavLink>
      </header>
    <h3>Error del servidor!!</h3>
    <p>(vuelva atras)</p>
  </div>
  )
}

export default Error;

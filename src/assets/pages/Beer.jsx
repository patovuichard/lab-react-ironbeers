import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";

function Beer() {
  const [allBeers, setAllBeers] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      // console.log(response)
      setAllBeers(response.data);
      setIsFetching(false);
    } catch (error) {
      console.log(error);
    }
  };

  if (isFetching === true) {
    return (
      // Spinner de Loading
      <div style={{ display: "flex", justifyContent: "center" }}>
        <RingLoader color="#d63636" size={60} />
      </div>
    );
  }

  return (
    <div>
      <header style={{ backgroundColor: "rgb(0, 153, 255)", padding: "10px", textAlign: "center" }}>
        <NavLink to="/" >🏠</NavLink>
      </header>
      
      {allBeers.map((eachBeer) => {
        return (
          <div key={eachBeer._id}>
            <div
              style={{ display: "flex", textAlign: "left", padding: "40px" }}
            >
              <img
                src={eachBeer.image_url}
                alt="img"
                width="20%"
              />
              <div style={{ margin: "20px" }}>
                <NavLink to={`/beers/${eachBeer._id}`} id={eachBeer._id}>
                  <h2>{eachBeer.name}</h2>
                </NavLink>
                
                <p>{eachBeer.tagline}</p>
                
                <h5>Created by: {eachBeer.contributed_by}</h5>
              </div>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default Beer;

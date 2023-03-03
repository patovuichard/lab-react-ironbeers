import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";

function Beer() {

  const [allBeers, setAllBeers] = useState(null)
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    getData()
  }, [])
  
  const getData = async () => {
    try {
      const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
      console.log(response)
      setAllBeers(response.data)
      setIsFetching(false)
    } catch (error) {
      console.log(error)
    }
  }

  if (isFetching === true) {
    return (
      // Spinner de Loading
      <div style={{display: "flex", justifyContent: "center"}}>
        <RingLoader color="#d63636" size={60}/>
      </div>
    );
  }

  return (
    <div>
      <header><NavLink to="/">Home</NavLink></header>
      <h2>All Beers</h2>
      {allBeers.map((eachBeer) => {
        <div key={eachBeer._id}>
          <img src={eachBeer.image_url} alt="img" />
          <h4>{eachBeer.name}</h4>
          <p>{eachBeer.tagline}</p>
          <h5>{eachBeer.contributed_by}</h5>
        </div>
      })}
    </div>
    
  )
}

export default Beer